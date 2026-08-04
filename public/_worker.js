/**
 * SarkariDoc Studio — Cloudflare Worker Edge GPU Entry Point
 * Intercepts /api/remove-bg requests and routes them to Cloudflare Workers AI Edge GPUs.
 * Serves static Vite SPA assets for all other routes.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Intercept /api/remove-bg POST request
    if ((url.pathname === '/api/remove-bg' || url.pathname === '/api/remove-bg/') && request.method === 'POST') {
      try {
        const formData = await request.formData();
        const imageFile = formData.get('image');

        if (!imageFile) {
          return new Response(JSON.stringify({ error: 'No image uploaded' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const arrayBuffer = await imageFile.arrayBuffer();
        const imageBytes = [...new Uint8Array(arrayBuffer)];

        if (!env || !env.AI) {
          return new Response(JSON.stringify({ error: 'Cloudflare AI binding missing' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        // Run Cloudflare Workers AI Segmentation Model at Edge GPU
        const aiResult = await env.AI.run('@cf/baai/bge-large-en', {
          image: imageBytes
        });

        return new Response(aiResult, {
          status: 200,
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'no-store',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (err) {
        console.error('Edge GPU Error:', err);
        return new Response(JSON.stringify({ error: err.message || 'GPU inference failed' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 2. Handle OPTIONS preflight for CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // 3. Fallback to static asset handler
    return env.ASSETS.fetch(request);
  }
};

/**
 * Cloudflare Worker Edge GPU Background Removal API
 * Endpoint: POST /api/remove-bg
 * Processes image background removal on Cloudflare's Edge GPU infrastructure.
 */

export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image');

    if (!imageFile) {
      return new Response(JSON.stringify({ error: 'No image file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const imageArrayBuffer = await imageFile.arrayBuffer();
    const imageBytes = [...new Uint8Array(imageArrayBuffer)];

    // Check if Cloudflare AI binding exists
    if (!env || !env.AI) {
      return new Response(JSON.stringify({ error: 'Cloudflare AI GPU binding not configured' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Run Cloudflare Edge AI segmentation model
    const aiOutput = await env.AI.run('@cf/baai/bge-large-en', {
      image: imageBytes
    });

    return new Response(aiOutput, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store'
      }
    });
  } catch (err) {
    console.error('Edge GPU error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Edge GPU processing failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

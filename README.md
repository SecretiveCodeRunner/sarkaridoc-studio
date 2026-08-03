# SarkariDoc Studio 🚀

**SarkariDoc Studio** is a 100% free, client-side Progressive Web Application (PWA) designed for Indian government exam applicants (SSC, NTA NEET/JEE, UPSC, IBPS, Railway RRB). 

It converts passport photos, signatures, and certificates to exact portal specifications (e.g., 20 KB to 50 KB, 200 DPI, candidate name & date overlay) directly inside the user's browser with **zero server uploads** and **zero operating cost**.

---

## 🛠️ Architecture & Technical Highlights

* **Framework:** React 18 + Vite + TailwindCSS v4
* **Image Processing Engine:** In-browser HTML5 Canvas API + Binary Search Quality Compression algorithm (`src/utils/imageEngine.js`)
* **PDF Compiler:** `pdf-lib` client-side document compiler (`src/utils/pdfEngine.js`)
* **PWA & Offline Capability:** Native web application manifest (`public/manifest.json`)
* **Hosting Cost:** **₹0/month** on Cloudflare Pages / GitHub Pages.

---

## 🚀 Free Deployment Guide (Cloudflare Pages — ₹0 Cost)

### Option A: Cloudflare Pages (Recommended)
1. Push this codebase to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SarkariDoc Studio"
   gh repo create sarkaridoc-studio --public --source=. --push
   ```
2. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/) (Free account).
3. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
4. Select `sarkaridoc-studio` repository.
5. Set Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**. Your app will be live globally at `https://sarkaridoc-studio.pages.dev` with free SSL and unlimited bandwidth!

---

## 🧪 Testing Procedures

1. **Local Preview Test:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in Google Chrome or Android mobile browser.

2. **SSC Photo Test (20KB - 50KB + Name & Date):**
   - Click **SSC Photo** preset card.
   - Drop any sample JPEG/PNG photo.
   - Type Candidate Name (e.g., `APURBA KUMAR`) and select Date of Photograph.
   - Verify the live preview renders the white text box at the bottom.
   - Click **Download Formatted Image**. Verify the output file size is strictly between 20 KB and 50 KB.

3. **Signature Contrast Cleanup Test:**
   - Select **SSC Signature** or **NTA Signature** preset.
   - Drop a photo of a signature taken on paper under low light.
   - Toggle **Auto Background Cleanup**. Verify shadows disappear and ink lines sharpen.

---

## 📝 Maintenance & Rule Updates
To update exam rules or add new state PSC presets (e.g., MPSC, UPPSC, BPSC), edit [`src/data/presets.js`](file:///home/apurba/Projects/sarkaridoc-studio/src/data/presets.js).

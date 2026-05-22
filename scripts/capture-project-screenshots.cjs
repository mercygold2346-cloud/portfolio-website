const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "projects");
fs.mkdirSync(outDir, { recursive: true });

const shots = [
  {
    url: "https://mono-store-website.vercel.app/",
    out: path.join(outDir, "mono-store.png"),
  },
  {
    url: "https://cardshark-insight-suite.vercel.app/",
    out: path.join(outDir, "cardshark.png"),
  },
  {
    url: "https://style-hub-gamma.vercel.app/",
    out: path.join(outDir, "style-hub.png"),
  },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  for (const { url, out } of shots) {
    console.log("Capturing", url);
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: out, fullPage: false });
    console.log("Saved", out);
  }

  await browser.close();
})();

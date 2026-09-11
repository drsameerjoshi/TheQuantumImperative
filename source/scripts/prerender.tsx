import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/src/pages/Home";
import Imprint from "../client/src/pages/Imprint";
import Privacy from "../client/src/pages/Privacy";

const distPublic = path.resolve(import.meta.dirname, "..", "dist", "public");
const indexPath = path.join(distPublic, "index.html");
const templateHtml = fs.readFileSync(indexPath, "utf8");

// Helper to create prerendered HTML with inlined styles if present
function generatePageHtml(Component: React.ComponentType) {
  const markup = renderToString(createElement(Component));
  let output = templateHtml.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  
  const stylesheetPattern = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/;
  const stylesheetMatch = output.match(stylesheetPattern);
  if (stylesheetMatch) {
    const cssPath = path.join(distPublic, stylesheetMatch[1].replace(/^\//, ""));
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, "utf8");
      output = output.replace(stylesheetPattern, `<style>${css}</style>`);
    }
  }
  return output;
}

// 1. Prerender Home (index.html)
const homeOutput = generatePageHtml(Home);
fs.writeFileSync(indexPath, homeOutput, "utf8");
console.log(`Prerendered homepage markup into ${indexPath}`);

// 2. Prerender Imprint (/imprint, /imprint/index.html, /imprint.html)
const imprintOutput = generatePageHtml(Imprint);
const imprintDir = path.join(distPublic, "imprint");
fs.mkdirSync(imprintDir, { recursive: true });
fs.writeFileSync(path.join(imprintDir, "index.html"), imprintOutput, "utf8");
fs.writeFileSync(path.join(distPublic, "imprint.html"), imprintOutput, "utf8");
console.log(`Prerendered imprint markup into ${imprintDir}/index.html and imprint.html`);

// 3. Prerender Privacy (/privacy, /privacy/index.html, /privacy.html)
const privacyOutput = generatePageHtml(Privacy);
const privacyDir = path.join(distPublic, "privacy");
fs.mkdirSync(privacyDir, { recursive: true });
fs.writeFileSync(path.join(privacyDir, "index.html"), privacyOutput, "utf8");
fs.writeFileSync(path.join(distPublic, "privacy.html"), privacyOutput, "utf8");
console.log(`Prerendered privacy markup into ${privacyDir}/index.html and privacy.html`);

// Clean up original external css if it was inlined
const stylesheetPattern = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/;
const stylesheetMatch = templateHtml.match(stylesheetPattern);
if (stylesheetMatch) {
  const cssPath = path.join(distPublic, stylesheetMatch[1].replace(/^\//, ""));
  if (fs.existsSync(cssPath)) {
    fs.unlinkSync(cssPath);
  }
}

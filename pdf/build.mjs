// Builds the recruiter-facing PDF from README.md.
// README.md is the single source of truth (GitHub profile); this script only changes presentation.
// Usage: cd pdf && npm install && npm run build
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const buildDir = path.join(here, 'build');
const htmlOut = path.join(buildDir, 'cv.html');
const pdfOut = path.join(root, 'miguel-gudino.pdf');
const chrome = process.env.CHROME_BIN ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const markdown = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
let body = new MarkdownIt({ html: true }).render(markdown);

// Presentation-only transforms (README stays untouched):
// 1. Section headings without emojis: cleaner look and safer for ATS parsers.
body = body.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner) =>
  `<h2>${inner.replace(/\p{Extended_Pictographic}️?\s*/gu, '').trim()}</h2>`);
// 2. Tech tags read as words, not identifiers: `Serverless_Framework` -> "Serverless Framework".
body = body.replace(/<code>([^<]*)<\/code>/g, (_, t) => `<code>${t.replace(/_/g, ' ')}</code>`);
// 3. Horizontal rules are replaced by the section heading style.
body = body.replace(/<hr>\n?/g, '');
// 4. Stable ids on h2/h3 (slug of the text) so style.css can control page layout per section.
const slug = (html) => html.replace(/<[^>]+>/g, '').normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/&amp;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
body = body.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (_, tag, inner) => `<${tag} id="${slug(inner)}">${inner}</${tag}>`);
// 5. Each h2 opens a <section id="s-<slug>">; the header (h1 block) gets its own section.
const parts = body.split(/(?=<h2 )/);
body = parts.map((part, i) => {
  const id = i === 0 ? 's-header' : `s-${part.match(/<h2 id="([^"]+)"/)[1]}`;
  return `<section id="${id}">\n${part}</section>\n`;
}).join('');

const css = fs.readFileSync(path.join(here, 'style.css'), 'utf8');
const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Miguel Gudiño — CV</title>
<style>${css}</style>
</head>
<body>
${body}
</body>
</html>
`;

fs.mkdirSync(buildDir, { recursive: true });
fs.writeFileSync(htmlOut, html);

const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'cv-chrome-'));
try {
  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--user-data-dir=${profile}`,
    `--print-to-pdf=${pdfOut}`,
    `file://${htmlOut}`,
  ], { stdio: 'ignore' });
} finally {
  fs.rmSync(profile, { recursive: true, force: true });
}

console.log(`HTML: ${htmlOut}\nPDF:  ${pdfOut}`);

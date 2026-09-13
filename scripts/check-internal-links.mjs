import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlFiles = [];
const ignoredDirs = new Set(['.git', 'node_modules']);

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (ignoredDirs.has(entry)) continue;
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath);
    } else if (entry.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

function isExternal(value) {
  return /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(value)
    || value.startsWith('mailto:')
    || value.startsWith('tel:')
    || value.startsWith('#');
}

function stripHashAndQuery(value) {
  return value.split('#')[0].split('?')[0];
}

function routeExists(route, fromFile) {
  const cleaned = decodeURIComponent(stripHashAndQuery(route));
  if (!cleaned || isExternal(cleaned)) return true;

  const baseDir = path.dirname(fromFile);
  const absoluteTarget = cleaned.startsWith('/')
    ? path.join(root, cleaned)
    : path.resolve(baseDir, cleaned);

  if (existsSync(absoluteTarget) && statSync(absoluteTarget).isFile()) return true;
  if (existsSync(absoluteTarget) && statSync(absoluteTarget).isDirectory()) {
    return existsSync(path.join(absoluteTarget, 'index.html'));
  }

  if (!path.extname(absoluteTarget)) {
    return existsSync(`${absoluteTarget}.html`) || existsSync(path.join(absoluteTarget, 'index.html'));
  }

  return false;
}

walk(root);

const failures = [];
const attrPattern = /\b(?:href|src)=["']([^"']+)["']/gi;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(attrPattern)) {
    const target = match[1].trim();
    if (!target || isExternal(target)) continue;
    if (!routeExists(target, file)) {
      failures.push(`${path.relative(root, file)} -> ${target}`);
    }
  }
}

if (failures.length) {
  console.error('Broken internal links or asset references found:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files for internal links and asset references.`);

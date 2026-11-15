// Runs after `astro build`: copies each CV PDF listed in src/cv-links.mjs from CV/
// into the build, next to the page that opens it. Takes the build folder as an
// optional argument (default dist).
import { copyFileSync, mkdirSync } from 'node:fs';
import { cvs } from '../src/cv-links.mjs';

const outDir = process.argv[2] ?? 'dist';

for (const { slug, source, file } of cvs) {
  mkdirSync(`${outDir}/${slug}`, { recursive: true });
  copyFileSync(`CV/${source}`, `${outDir}/${slug}/${file}`);
}

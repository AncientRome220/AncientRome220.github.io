import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname,'..');
const route = 'talks/triad-2026';
const url = 'https://ancientrome220.github.io/talks/triad-2026/';
const names = ['index.html','slides.html','slides.pdf'];
for (const folder of ['public','dist']) {
  const dir = resolve(root,folder,route);
  assert.deepEqual((await readdir(dir)).sort(),names,`${folder}: unexpected public file`);
  const landing = await readFile(resolve(dir,'index.html'),'utf8');
  const slides = await readFile(resolve(dir,'slides.html'),'utf8');
  const pdf = await readFile(resolve(dir,'slides.pdf'));
  assert.match(landing,/<html lang="en">/);
  assert.match(landing,/<meta name="viewport"/);
  assert.ok(landing.includes(`<link rel="canonical" href="${url}">`));
  assert.equal((landing.match(/<h1[ >]/g)||[]).length,1);
  for (const file of ['slides.html','slides.pdf']) assert.ok(landing.includes(`href="${file}"`));
  assert.equal((slides.match(/<section\b(?=[^>]*\bid="[^"]+")(?=[^>]*class="[^"]*\bslide\b)[^>]*>/g)||[]).length,27);
  assert.equal((slides.match(/class="slide-access(?: slide-access-large)?"/g)||[]).length,27);
  assert.equal((slides.match(/class="slide-access slide-access-large"/g)||[]).length,2);
  assert.doesNotMatch(slides,/<(?:aside|div)\b[^>]*class="[^"]*\bnotes\b/i);
  assert.doesNotMatch(slides,/\sdata-notes\s*=/i);
  assert.doesNotMatch(slides,/Stage direction:|Source basis(?: \(not spoken\))?:|spoken:start|spoken:end|agent_source_review|file:\/\/\/|C:[\\/]research[\\/]/i);
  const markup = slides.replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>');
  for (const match of markup.matchAll(/<(?:img|script)\b[^>]*\b(?:data-)?src="([^"]+)"/g)) assert.ok(match[1].startsWith('data:'),'external slide asset');
  for (const block of markup.matchAll(/<div class="slide-access(?: slide-access-large)?">([\s\S]*?)<\/div>/g)) {
    for (const link of block[1].matchAll(/href="([^"]+)"/g)) assert.equal(link[1],url,'wrong QR destination');
  }
  assert.ok(pdf.subarray(0,5).toString()==='%PDF-');
}
for (const name of names) assert.ok((await readFile(resolve(root,'public',route,name))).equals(await readFile(resolve(root,'dist',route,name))),`Build changed ${name}`);
console.log('Verified TRIAD landing page, 27-slide audience export, QR links, file allowlist and privacy guards.');

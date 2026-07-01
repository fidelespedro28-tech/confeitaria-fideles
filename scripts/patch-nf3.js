import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'node_modules', 'nf3', 'dist', '_chunks', 'trace.mjs');

if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('import { nodeFileTrace } from "@vercel/nft";')) {
    content = content.replace(
      'import { nodeFileTrace } from "@vercel/nft";',
      'const { nodeFileTrace } = createRequire(import.meta.url)("@vercel/nft");'
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log('[patch-nf3] Successfully patched trace.mjs to use createRequire.');
  } else {
    console.log('[patch-nf3] trace.mjs is already patched or does not contain standard import.');
  }
} else {
  console.log('[patch-nf3] trace.mjs not found.');
}

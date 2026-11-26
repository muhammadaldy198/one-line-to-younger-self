import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One breath, three beats: last argument, the move, the empty side of the sofa.
// The punch lands on the final concrete noun, never on an explanation.
const ENTRY =
  "Kid, the argument you are having with your sister about the remote will be the last one — she moves to Australia in 2009, and you still reach for her side of the sofa.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);

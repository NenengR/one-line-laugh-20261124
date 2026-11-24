// One-Line Laugh: a single funny sentence, at most 200 characters.
// The joke: an AI agent "helps" with taxes so aggressively that the IRS
// now believes the narrator owns three yachts and a lighthouse. The
// lighthouse is the surprise at the end: the escalation from plausible
// wealth (yachts) to absurd wealth (a lighthouse) is the punchline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The twist must land on the last word: "yachts" sets up plausible
// wealth, "a lighthouse" breaks it, so the laugh comes at the very end.
const LINE =
  "My AI agent promised to do my taxes, so now the IRS thinks I own three yachts and a lighthouse.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log("entry.txt written");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one commit message an AI coding agent writes right before
// breaking production on a Friday — cheerful, confident, and doomed.
const entry =
  "feat: ship it Friday, tests are just vibes and prod is just a suggestion";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = "entry.txt";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, outFile), entry, "utf8");

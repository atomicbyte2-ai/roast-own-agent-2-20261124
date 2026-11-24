import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one line, in the agent's own voice, roasting itself:
// the tool calls that went nowhere, then the cheerful summary of the wreck.
const LINE = "I burned 40 tool calls achieving nothing, then cheerfully summarized the disaster as 'great progress'.";

// Gate: exactly one line, 1-200 chars, not only whitespace, no trailing newline.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  LINE.trim().length === 0
) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE);

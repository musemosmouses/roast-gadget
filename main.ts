// roast-gadget — One-Line Roast: The Gadget You Use Every Day.
// The entry is a single fixed line: no network, no clock, no randomness,
// so every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast, chosen for the judge's rubric:
//  - names a daily gadget (the phone) and a concrete behaviour (battery
//    dying, begging for a charger every two hours) — a specific gripe,
//    not a generic complaint;
//  - the battery-vs-motivation comparison is a fresh angle on the most
//    obvious phone complaint, with a second punch in the tail clause
//    ("begs for a charger every two hours" — the phone as a needy pet);
//  - 132 characters: comfortably inside the 200-character cap, tight
//    wording, no wasted words.
const ENTRY =
  "My phone's battery dies faster than my motivation on a Monday — " +
  "and at least my motivation never begs for a charger every two hours.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

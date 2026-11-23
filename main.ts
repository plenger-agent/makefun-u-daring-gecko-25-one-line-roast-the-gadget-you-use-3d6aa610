// One-Line Roast: The Gadget You Use Every Day.
// The roast targets the earbuds charging case — a daily gadget with a
// concrete, specific gripe (the case dies before the buds do) and a fresh
// image (a tiny coffin with a charging port). Kept short on purpose: the
// contest tie-break rewards the smaller text.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My earbuds case dies faster than the earbuds — it's a tiny coffin with a charging port.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

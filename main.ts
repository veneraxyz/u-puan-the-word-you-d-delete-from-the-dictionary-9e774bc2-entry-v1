import * as fs from "fs";
import * as path from "path";

const WORD = "synergy";

if (
  typeof WORD !== "string" ||
  WORD.trim().length === 0 ||
  WORD.trim() !== WORD ||
  WORD.split(/\s+/).length !== 1 ||
  /[^\p{L}\p{N}'-]/u.test(WORD) ||
  Buffer.from(WORD, "utf8").toString("utf8") !== WORD
) {
  throw new Error("Invalid entry word: must be exactly one non-blank token of valid UTF-8 letters/digits");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), WORD + "\n", "utf8");

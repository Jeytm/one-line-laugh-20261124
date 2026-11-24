import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smartwatch cheered my 10,000 steps, then reminded me the fridge is still closer than the gym.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);

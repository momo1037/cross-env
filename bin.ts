#!/usr/bin/env node

import { execSync } from "node:child_process";

const argv = process.argv.slice(2);
const cmdIndex = argv.findIndex((v) => !v.includes("="));
if (cmdIndex < 0) process.exit(1);
const envs = argv
  .slice(0, cmdIndex)
  .map((v) => {
    const eqIndex = v.indexOf("=");
    const left = v.slice(0, eqIndex);
    const right = v.slice(eqIndex + 1);
    return [left, right];
  })
  .reduce((acc, [k, v]) => ((acc[k] = v), acc), {} as Record<string, string>);
const cmd = argv.slice(cmdIndex).join(" ");
execSync(cmd, { env: { ...process.env, ...envs }, stdio: "inherit" });

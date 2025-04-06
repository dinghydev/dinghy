import { execa } from "execa";
import Debug from "debug";
import { reactiacAppHome } from "./loadConfig.ts";
Debug.formatters.a = (v) => {
  return `[${v.join(" ")}]`;
};
const debug = Debug("cmd");

export const streamCmd = async (args: string[], cwd?: string) => {
  debug("running %a from %s", args, reactiacAppHome);
  try {
    return await execa(args[0], args.slice(1), {
      stdio: "inherit",
      cwd: cwd || reactiacAppHome,
    });
  } catch (e) {
    console.error(
      `Failed command: (cd ${reactiacAppHome}; ${args.join(" ")})`,
    );
    throw e;
  }
};

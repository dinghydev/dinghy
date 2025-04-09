import { execa } from "execa";
import Debug from "debug";
import { reactiacAppHome } from "./loadConfig.ts";
Debug.formatters.a = (v) => {
  return `[${v.join(" ")}]`;
};
const debug = Debug("cmd");

export const streamCmd = async (
  args: string[],
  cwd?: string,
  exitOnFailure = true,
) => {
  debug("running %a from %s", args, reactiacAppHome);
  const workingDir = cwd || reactiacAppHome;
  if (exitOnFailure) {
    try {
      return await execa(args[0], args.slice(1), {
        stdio: "inherit",
        cwd: workingDir,
      });
    } catch (e) {
      console.error(
        `Failed command: (cd ${workingDir}; ${args.join(" ")})`,
      );
      Deno.exit(1);
    }
  }

  const result = await execa(args[0], args.slice(1), {
    stdout: ["pipe", "inherit"],
    stderr: ["pipe", "inherit"],
    cwd: workingDir,
    all: true,
    reject: false,
  });
  if (result.exitCode !== 0) {
    debug(
      "Failed command: (cd %s; %s)",
      workingDir,
      args.join(" "),
    );
  }
  return result;
};

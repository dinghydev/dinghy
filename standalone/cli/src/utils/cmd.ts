import { execa } from "execa";
import Debug from "debug";
import { containerAppHome } from "./loadConfig.ts";
Debug.formatters.a = (v) => {
  return `[${v.join(" ")}]`;
};
const debug = Debug("cmd");

export const streamCmd = async (
  args: string[],
  cwd?: string,
  exitOnFailure = true,
) => {
  const workingDir = cwd || containerAppHome;
  debug("streamCmd %a from %s", args, containerAppHome);
  if (exitOnFailure) {
    try {
      return await execa(args[0], args.slice(1), {
        stdio: "inherit",
        cwd: workingDir,
        shell: true,
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
    all: true,
    cwd: workingDir,
    shell: true,
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

export const execCmd = async (
  cmd: string,
  cwd?: string,
): Promise<string> => {
  const workingDir = cwd || containerAppHome;
  const args = cmd.split(" ");
  debug("execCmd %a from %s", args, containerAppHome);
  const result = await execa(args[0], args.slice(1), {
    stdout: ["pipe"],
    stderr: ["pipe"],
    all: true,
    cwd: workingDir,
    shell: true,
    reject: false,
  });
  if (result.exitCode !== 0) {
    debug(
      "Failed command: (cd %s; %s)",
      workingDir,
      args.join(" "),
    );
  }
  debug("execCmd result: %s", result.all);
  return result.all.trim();
};

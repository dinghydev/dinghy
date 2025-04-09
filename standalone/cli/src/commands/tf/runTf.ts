import type { CommandArgs } from "../../types.ts";
import { streamCmd } from "../../utils/cmd.ts";
import { reactiacRc } from "../../utils/loadConfig.ts";
import { CONTAINER_APP_HOME } from "../devcontainer.ts";
import { configGetTfImage } from "../../utils/dockerConfig.ts";
import { existsSync } from "jsr:@std/fs/exists";

export const runTf = async (
  workingDir: string,
  tfVersion: string,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  const envs = [
    ...Object.entries(reactiacRc).map(([key, value]) => `${key}=${value}`),
    `APP_HOME=${CONTAINER_APP_HOME}`,
  ];
  const mounts = [
    `${workingDir}:${workingDir}`,
  ];
  const addMountIfExists = (source: string, target: string) => {
    if (existsSync(source)) {
      mounts.push(`${source}:${target}`);
    }
  };
  addMountIfExists(`${Deno.env.get("HOME")}/.aws`, "/root/.aws");

  return await streamCmd(
    [
      "docker",
      "run",
      "--rm",
      "-t",
      ...envs.flatMap((env) => ["-e", env]),
      ...mounts.flatMap((m) => ["--volume", m]),
      "--workdir",
      workingDir,
      configGetTfImage(tfVersion),
      ...args,
      ...(options["tf-options"] || []),
    ],
    undefined,
    exitOnFailure,
  );
};

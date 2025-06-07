import type { CommandContext } from "../types.ts";
import Debug from "debug";
import { hostAppHome } from "./loadConfig.ts";
import { runDockerCmd } from "./dockerUtils.ts";
import { configGetEngineImage } from "./dockerConfig.ts";
import { projectVersionRelease } from "./projectVersions.ts";
const debug = Debug("runEngineCommand");
function collectEngineArgs(originalArgs: string[]) {
  const engineVersionIndex = originalArgs.indexOf("--engine-version");
  if (engineVersionIndex !== -1) {
    originalArgs = [
      ...originalArgs.slice(0, engineVersionIndex),
      ...originalArgs.slice(engineVersionIndex + 2),
    ];
  }
  return originalArgs.map((arg) => arg.includes(" ") ? `"${arg}"` : arg);
}
export async function runEngineCommand(context: CommandContext) {
  debug("running engine command [%s]", context.originalArgs.join(" "));
  await runDockerCmd(
    hostAppHome,
    { REACTIAC_CLI_VERSION: projectVersionRelease() },
    [],
    [
      "reactiac",
      ...collectEngineArgs(context.originalArgs),
    ],
    configGetEngineImage(),
  );
}

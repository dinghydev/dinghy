import {
  type CommandContext,
  OPTIONS_SYMBOL,
  REQUIRE_CONTAINER_SYMBOL,
  RUN_SYMBOL,
} from "../types.ts";
import { showHelp } from "./showHelp.ts";
import Debug from "debug";
import { parseOptions } from "./parseOptions.ts";
import { isInsideContainer } from "./loadConfig.ts";
const debug = Debug("runCommand");

const executeCommandInContainer = async (context: CommandContext) => {
  const options = parseOptions(
    context.options,
    context.args,
    context.envPrefix,
  );
  // todo: use REQUIRE_CONTAINER_SYMBOL to fix iac-cicd $ DOCKER_IMAGEVERSION=latest reactiac tf init production --debug
  if (context.commands[REQUIRE_CONTAINER_SYMBOL] && !isInsideContainer) {
    return executeCommandInContainer(context);
  }
  debug("running [reactiac %s]", context.prefix.join(" "));
  return await context.commands[RUN_SYMBOL](context, options);
};

const executeCommand = async (context: CommandContext) => {
  if (context.commands[REQUIRE_CONTAINER_SYMBOL] && !isInsideContainer) {
    return executeCommandInContainer(context);
  }
  const options = parseOptions(
    context.options,
    context.args,
    context.envPrefix,
  );
  debug("running [reactiac %s]", context.prefix.join(" "));
  return await context.commands[RUN_SYMBOL](context, options);
};

export async function runCommand(context: CommandContext) {
  const cmdStr = context.args[0];
  if (
    context.commands[cmdStr] ||
    (!context.options.arguments && cmdStr && cmdStr.charAt(0) !== "-")
  ) {
    let command = context.commands[cmdStr];
    let envName = cmdStr;
    if (!command) {
      Object.entries(context.commands).find(([name, cmdDef]) => {
        const alias = cmdDef[OPTIONS_SYMBOL].cmdAlias ?? [];
        if (alias.includes(cmdStr)) {
          command = cmdDef;
          envName = name;
          return true;
        }
        return false;
      });
    }
    const currentCommand = [...context.prefix, cmdStr];
    if (!command) {
      const cmds = Object.keys(context.commands);
      Object.values(context.commands).map((cmd) => {
        for (const alias of cmd[OPTIONS_SYMBOL].cmdAlias ?? []) {
          cmds.push(alias);
        }
      });

      console.log(
        `Available commands:${
          context.prefix.length ? ` ${context.prefix.join(" ")}` : ""
        } [${cmds.join(", ")}]`,
      );
      throw new Error(`Command [${currentCommand.join(" ")}] not found`);
    }
    return await runCommand({
      prefix: [...context.prefix, cmdStr],
      envPrefix: [...context.prefix, envName],
      args: context.args.slice(1),
      originalArgs: context.originalArgs,
      commands: command,
      options: command[OPTIONS_SYMBOL],
    });
  }

  if (context.args.includes("--help") || context.args.includes("-h")) {
    showHelp(context);
    return;
  }

  return await executeCommand(context);
}

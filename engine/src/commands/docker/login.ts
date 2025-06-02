import { existsSync } from "@std/fs/exists";
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { execa } from "execa";
import chalk from "chalk";
import Debug from "debug";
const debug = Debug("init");

const options: CommandOptions = {
  description: {},
  cmdDescription: "Login to the Docker registry",
};
const run = async (_context: CommandContext, args: CommandArgs) => {
  console.log("TODO: login to the Docker registry");
};

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command;

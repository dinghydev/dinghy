import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from "../types.ts";
import upgrade from "./upgrade.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../types.ts";
import { showHelp } from ".././utils/showHelp.ts";
import { versionDetails } from ".././utils/runtimeVersion.ts";
import postinstall from "./postinstall.ts";
import init from "./init.ts";
import devcontainer from "./devcontainer.ts";
import render from "./render/index.ts";
import diagram from "./diagram/index.ts";
import tf from "./tf/index.ts";

const options: CommandOptions = {
  boolean: ["debug", "help", "version"],
  flagsHidden: ["debug", "help"],
  default: {
    debug: Boolean(Deno.env.get("DEBUG")),
  },
  description: {
    debug: "Enable debug mode",
    help: "Show help",
    version: "Show version",
  },
  alias: {
    h: "help",
    v: "version",
  },
  cmdDescription:
    "ReactIAC Cli, a command line tool to help with ReactIAC development and operations",
  additionalOptions: {
    "Global Options": [
      {
        name: "--app-home",
        description: "The path to the ReactIAC app home directory",
      },
      {
        name: "--debug",
        description: "Enable debug mode",
      },
      {
        name: "-h, --help",
        description: "Show help",
      },
      {
        name: "--output",
        description: "The path to the output directory",
        options: "[default: output]",
      },
    ],
  },
};
const run = (context: CommandContext, args: CommandArgs) => {
  if (args.version) {
    console.log(versionDetails);
  } else {
    showHelp(context);
  }
};

const commands: Commands = {
  init,
  upgrade,
  postinstall,
  devcontainer,
  render,
  diagram,
  tf,
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;

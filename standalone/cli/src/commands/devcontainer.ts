import { existsSync } from "@std/fs/exists";
import { resolve } from "@std/path";
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from "../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../types.ts";
import Debug from "debug";
import {
  configGet,
  configGetDockerImage,
  reactiacAppHome,
  reactiacRc,
} from ".././utils/loadConfig.ts";
import { streamCmd } from ".././utils/cmd.ts";
const debug = Debug("init");

const options: CommandOptions = {
  collect: ["mounts"],
  string: ["workspace"],
  description: {
    mounts: "Additional mounts to the devcontainer",
    workspace: "The workspace folder to use in the devcontainer",
  },
  cmdDescription: "Start the project in devcontainer",
  cmdAlias: ["dc"],
};

const run = async (_context: CommandContext, args: CommandArgs) => {
  await prepareConfig(args);
  await streamCmd(["devcontainer", "open"]);
};

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command;

function prepareConfig(args: CommandArgs) {
  const configFolder = `${reactiacAppHome}/.devcontainer`;
  if (existsSync(configFolder)) {
    debug(
      "use existing .devcontainer config folder, skip generating .devcontainer.json",
    );
    return;
  }

  const configFile = `${reactiacAppHome}/.devcontainer.json`;
  const config = configGet(["devcontainer", "json"]) || {};
  config.name ??= reactiacAppHome.split("/").pop() as string;
  config.runArgs ??= ["--name", config.name];
  if (!config.build) {
    config.image = configGetDockerImage();
  }

  config.containerEnv ??= {};
  const envs = Object.entries(reactiacRc);
  if (envs.length > 0) {
    for (const [key, value] of envs) {
      config.containerEnv[key] = value;
    }
  }

  config.mounts ??= [];
  console.log("user mountsxxxx", args.mounts);

  const addMountIfExists = (source: string, target: string) => {
    if (existsSync(source)) {
      config.mounts.push(`source=${source},target=${target},type=bind`);
    }
  };
  addMountIfExists(
    `${reactiacAppHome}/deno.jsonc`,
    "/reactiac/workspace/deno.jsonc",
  );
  addMountIfExists(`${reactiacAppHome}/deno.lock`, "/reactiac/deno.lock");
  addMountIfExists(`${Deno.env.get("HOME")}/.ssh`, "/root/.ssh");
  addMountIfExists(`${Deno.env.get("HOME")}/.npmrc`, "/root/.npmrc");
  if (args.mounts) {
    for (const mount of args.mounts) {
      const [source, target] = mount.split(":");
      addMountIfExists(resolve(source), target);
    }
  }

  config.containerEnv.APP_HOME ??= "/reactiac/workspace/project/app";
  config.workspaceMount ??=
    `source=${reactiacAppHome},target=/reactiac/workspace/project/app,type=bind`;
  config.workspaceFolder ??= args.workspace ||
    `/reactiac/workspace/project${
      existsSync(`${reactiacAppHome}/.vscode`) ? "/app" : ""
    }`;
  // config.onCreateCommand ??=
  //   `ln -s /workspace/.vscode /workspace/deno.jsonc /workspace/deno.lock ${config.workspaceFolder}/`;

  config.customizations ??= {
    vscode: {
      extensions: ["ms-azuretools.vscode-docker", "denoland.vscode-deno"],
      settings: {
        "remote.extensionKind": {
          "ms-azuretools.vscode-docker": ["ui"],
          "denoland.vscode-deno": ["workspace"],
        },
      },
    },
  };
  Deno.writeTextFileSync(configFile, JSON.stringify(config, null, 2));
  debug("generated %s", configFile);
}

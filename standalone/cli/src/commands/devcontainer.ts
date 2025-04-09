import { existsSync } from "@std/fs/exists";
import { basename, dirname, resolve } from "@std/path";
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from "../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../types.ts";
import Debug from "debug";
import { configGet, reactiacAppHome, reactiacRc } from "../utils/loadConfig.ts";
import { streamCmd } from ".././utils/cmd.ts";
import { configGetDockerImage } from "../utils/dockerConfig.ts";
import { execa } from "execa";
const debug = Debug("init");

const options: CommandOptions = {
  collect: ["mounts"],
  string: ["workspace"],
  boolean: ["no-open"],
  description: {
    mounts: "Additional mounts to the devcontainer",
    workspace: "The workspace folder to use in the devcontainer",
    "no-open":
      "Do not open the devcontainer.Generate .devcontainer.json only if not exist",
  },
  cmdDescription: "Start the project in devcontainer",
  cmdAlias: ["dc"],
};

const run = async (_context: CommandContext, args: CommandArgs) => {
  const devcontainerConfig = await prepareConfig(args);
  if (!args["no-open"]) {
    if (devcontainerConfig) {
      debug("remove devcontainer %s if exits", devcontainerConfig.name);
      await execa("docker", ["rm", "-f", devcontainerConfig.name as string], {
        stdio: "ignore",
        reject: false,
      });
    }

    const result = await execa("devcontainer", ["open"], {
      stdio: "ignore",
      reject: false,
    });
    if (result.exitCode !== 0) {
      console.log(`Config generated at ${reactiacAppHome}/.devcontainer.json}`);
      console.log(
        `Failed to open devcontainer, make sure it has been installed correctly https://code.visualstudio.com/docs/devcontainers/devcontainer-cli#_installation`,
      );
    }
  }
};

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command;

export const CONTAINER_PROJECT_FOLDER = "/reactiac/workspace/project";
export const CONTAINER_APP_HOME = `${CONTAINER_PROJECT_FOLDER}/app`;

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

  const addMountIfExists = (source: string, target: string) => {
    if (existsSync(source)) {
      config.mounts.push(`source=${source},target=${target},type=bind`);
    }
  };
  addMountIfExists(
    `${reactiacAppHome}/deno.jsonc`,
    "/reactiac/workspace/deno.jsonc",
  );
  addMountIfExists(reactiacAppHome, reactiacAppHome);
  addMountIfExists(`${reactiacAppHome}/deno.lock`, "/reactiac/deno.lock");
  addMountIfExists(`${Deno.env.get("HOME")}/.ssh`, "/root/.ssh");
  addMountIfExists(`${Deno.env.get("HOME")}/.npmrc`, "/root/.npmrc");
  if (args.mounts) {
    for (const mount of args.mounts) {
      const [source, target] = mount.split(":");
      addMountIfExists(resolve(source), target);
    }
  }

  config.containerEnv.HOST_APP_HOME = reactiacAppHome;
  config.containerEnv.APP_HOME = CONTAINER_APP_HOME;
  config.workspaceMount ??=
    `source=${reactiacAppHome},target=${CONTAINER_APP_HOME},type=bind`;

  const vscodeConfigExist = existsSync(`${reactiacAppHome}/.vscode`);
  config.workspaceFolder ??= args.workspace ||
    (vscodeConfigExist ? CONTAINER_APP_HOME : CONTAINER_PROJECT_FOLDER);

  config.onCreateCommand = "on-devcontainer-create.ts";

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
  if (args["no-open"]) {
    console.log("generated", configFile);
  }
  return config;
}

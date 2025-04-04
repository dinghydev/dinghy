import * as fs from "@std/fs";
import { resolve } from "node:path";
import * as yaml from "@std/yaml";
import { parseArgs } from "@std/cli";
import Debug from "debug";
const debug = Debug("loadConfig");

const resolveHome = () => {
  const userProvided = parseArgs(Deno.args)["app-home"] ||
    Deno.env.get("REACTIAC_HOME");
  let home: string;
  if (userProvided) {
    home = resolve(userProvided);
  } else {
    home = Deno.cwd();
  }

  console.log("resolved reactiac home %s", home);
  return home;
};

export const reactiacRc: Record<string, string> = {};
export const reactiacAppHome = resolveHome();

export const reactiacAppConfig: any = {};
function loadAppConfig() {
  const configFile = `${reactiacAppHome}/app.yaml`;
  if (!fs.existsSync(configFile)) {
    return;
  }

  const config = yaml.parse(Deno.readTextFileSync(configFile));
  debug("loaded app config from {0}", configFile);
  if (config) {
    Object.assign(reactiacAppConfig, config);
  }
}

export const configDockerRepoDefault =
  "public.ecr.aws/f2v6q7q7/reactiac/reactiac";
export const configDockerVersionDefault = "latest";

export const configGetDockerRepo = () => {
  return configGet(["docker", "repo"]) || configDockerRepoDefault;
};

export const configGetDockerVersion = () => {
  return configGet(["docker", "version"]) || configDockerVersionDefault;
};

export const configGetDockerImage = () => {
  let image = configGet(["docker", "image"]);
  if (!image) {
    const arch = Deno.build.arch === "aarch64" ? "-linux-arm64" : "";
    image = `${configGetDockerRepo()}:${configGetDockerVersion()}${arch}`;
  }
  return image;
};

export const configGet = (paths: string[]) => {
  let current = reactiacAppConfig;
  for (const path of paths) {
    if (!current || typeof current !== "object") {
      break;
    }
    current = current[path];
  }
  if (current === undefined) {
    const envVar = paths.join("_").toUpperCase();
    current = Deno.env.get(envVar);
    if (current !== undefined) {
      debug("use env %s=*", envVar);
    }
  } else {
    debug("use config %s=*", paths.join("."));
  }
  return current;
};

async function loadEnvFile(path: string) {
  if (!(await fs.exists(path))) {
    return;
  }

  for (const line of Deno.readTextFileSync(path).split(/\r?\n/)) {
    const index = line.indexOf("=");
    if (index > 0 && !line.startsWith("#")) {
      const k = line.slice(0, index).trim();
      const v = line.slice(index + 1).trim();
      reactiacRc[k] = v;
      Deno.env.set(k, v);
      debug("loaded %s=* from %s", k, path);
    }
  }
}

export async function loadConfig() {
  debug("app home %s", reactiacAppHome);
  for (
    const file of [
      `${Deno.env.get("HOME")}/.reactiacrc`,
      `${reactiacAppHome}/.reactiacrc`,
      `${reactiacAppHome}/.reactiacrc.local`,
    ]
  ) {
    await loadEnvFile(file);
  }
  loadAppConfig();
}

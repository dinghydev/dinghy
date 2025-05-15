import * as fs from "@std/fs";
import { basename, resolve } from "@std/path";
import { walkSync } from "@std/fs";
import * as yaml from "@std/yaml";
import { parseArgs } from "@std/cli";
import Debug from "debug";
const debug = Debug("loadConfig");

const resolveHome = () => {
  const appHome = Deno.env.get("APP_HOME") || parseArgs(Deno.args)["app-home"];
  if (appHome) {
    return resolve(appHome);
  } else {
    return Deno.cwd();
  }
};

export const reactiacRc: Record<string, string> = {};
export const isInsideContainer = Deno.env.get("HOST_USER_HOME") !== undefined;
export const hostAppHome = Deno.env.get("HOST_APP_HOME") || resolveHome();
export const appHomeMount = `/reactiac/workspace/project/${
  basename(hostAppHome)
}`;
export const containerAppHome = isInsideContainer
  ? appHomeMount
  : resolveHome();
export const reactiacHome = Deno.env.get("REACTIAC_HOME") ||
  `${Deno.env.get("HOME")}/.reactiac`;

export const reactiacAppConfig: any = {};
function loadAppConfig() {
  const configFile = `${hostAppHome}/iac.yaml`;
  if (!fs.existsSync(configFile)) {
    return;
  }

  const config = yaml.parse(Deno.readTextFileSync(configFile));
  if (config) {
    Object.assign(reactiacAppConfig, config);
  }
  debug("loaded app config from", configFile);
  loadApps();
  loadFiles([`${hostAppHome}/config/`]);
}

function loadFiles(basePaths: string[]) {
  reactiacAppConfig.files ??= {};
  for (const basePath of basePaths) {
    if (!fs.existsSync(basePath)) {
      continue;
    }
    for (const dirEntry of walkSync(basePath)) {
      if (dirEntry.isFile && !dirEntry.name.startsWith(".")) {
        const filePath = dirEntry.path;
        const fileText = Deno.readTextFileSync(filePath);
        debug("loading file %s", filePath);
        const fileConfig = filePath.endsWith(".yaml")
          ? yaml.parse(fileText)
          : fileText;
        const objectPath = filePath.substring(hostAppHome.length + 1).split(
          "/",
        );
        const fileName = objectPath.pop() as string;
        objectPath.push("files");
        let current = reactiacAppConfig.files;
        objectPath.map((path) => {
          current[path] ??= {};
          current = current[path];
        });
        current[fileName] = fileConfig;
      }
    }
  }
}

function loadApps() {
  reactiacAppConfig.apps ??= {};
  for (const dirEntry of Deno.readDirSync(hostAppHome)) {
    if (dirEntry.name.endsWith(".tsx")) {
      reactiacAppConfig.apps[dirEntry.name.replace(".tsx", "")] = dirEntry.name;
      debug("discovered app: %s", dirEntry.name);
    }
  }
  if (!Object.keys(reactiacAppConfig.apps).length) {
    throw new Error(`No tsx files found in ${hostAppHome}`);
  }
}

export const configGet = (paths: string[]) => {
  const envVar = paths.join("_").toUpperCase();
  let current = Deno.env.get(envVar);
  if (current !== undefined) {
    debug("use env %s=*", envVar);
  } else {
    current = reactiacAppConfig;
    for (const path of paths) {
      if (!current || typeof current !== "object") {
        break;
      }
      current = current[path];
    }
    if (current !== undefined) {
      debug("use config %s=*", paths.join("."));
    }
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
      if (Deno.env.get(k) === undefined) {
        Deno.env.set(k, v);
        reactiacRc[k] = v;
        debug("loaded %s=* from %s", k, path);
      }
    }
  }
}

export async function loadConfig() {
  debug("reactiac home %s", reactiacHome);
  debug("app home %s", containerAppHome);
  for (
    const file of [
      `${containerAppHome}/.reactiacrc.local`,
      `${containerAppHome}/.reactiacrc`,
      `${reactiacHome}rc`,
    ]
  ) {
    await loadEnvFile(file);
  }
  loadAppConfig();
}

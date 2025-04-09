import * as fs from "@std/fs";
import { resolve } from "@std/path";
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
export const reactiacAppHome = resolveHome();
export const reactiacHome = Deno.env.get("REACTIAC_HOME") ||
  `${Deno.env.get("HOME")}/.reactiac`;

export const reactiacAppConfig: any = {};
function loadAppConfig() {
  const configFile = `${reactiacAppHome}/app.yaml`;
  if (!fs.existsSync(configFile)) {
    return;
  }

  const config = yaml.parse(Deno.readTextFileSync(configFile));
  debug("loaded app config from", configFile);
  if (config) {
    Object.assign(reactiacAppConfig, config);
  }
}

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
  debug("reactiac home %s", reactiacHome);
  debug("app home %s", reactiacAppHome);
  for (
    const file of [
      `${reactiacHome}rc`,
      `${reactiacAppHome}/.reactiacrc`,
      `${reactiacAppHome}/.reactiacrc.local`,
    ]
  ) {
    await loadEnvFile(file);
  }
  loadAppConfig();
}

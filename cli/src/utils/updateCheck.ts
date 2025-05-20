import { existsSync } from "@std/fs";
import Debug from "debug";
import { runtimeVersion } from "./runtimeVersion.ts";
import chalk from "chalk";
import { walk } from "jsr:@std/fs/walk";
import { upgradeToVersion } from "../commands/upgrade.ts";
import { reactiacHome } from "./loadConfig.ts";
import { execa } from "execa";
const debug = Debug("updateCheck");

const todayYYYYMMDD = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};

const latestVersionFile = () => `${reactiacHome}/states/latest-version.json`;

export const resolveLatestVersion = (base: string) => {
  const versionFile = latestVersionFile();
  if (!existsSync(versionFile)) {
    console.warn(`Latest version file ${versionFile} does not exist`);
    return base;
  }
  const versions = JSON.parse(Deno.readTextFileSync(versionFile));
  const version = versions[base];
  if (!version) {
    throw new Error(`No version found for ${base}`);
  }
  debug("resolved %s to %s", base, version);
  return version;
};

const writeLatestVersion = (version: object) => {
  const versionFile = latestVersionFile();
  Deno.writeTextFileSync(versionFile, JSON.stringify(version));
  debug("wrote latest version to %s", versionFile);
};

const updateCheckFile = () =>
  `${reactiacHome}/states/update-check-${todayYYYYMMDD()}`;

export const createUpdateCheckFile = () => {
  const file = updateCheckFile();
  Deno.writeFileSync(file, new Uint8Array());
  debug("created update check file %s", file);
};

export const cleanUpdateCheck = async () => {
  const statesDir = `${reactiacHome}/states`;
  if (existsSync(statesDir)) {
    for await (const dirEntry of walk(statesDir)) {
      if (dirEntry.name.startsWith("update-check-")) {
        debug("clean up existing update check file %s exists", dirEntry.path);
        Deno.removeSync(dirEntry.path);
      }
    }
  }
};

export const fetchLatestVersion = async () => {
  const url = Deno.env.get("REACTIAC_UPDATE_CHECK_URL") ||
    "https://play.reactiac.dev/download/latest-version.json";
  const response = await fetch(`${url}?runner-version=${runtimeVersion}`);
  const version = await response.json();
  debug("fetched latest version %O", version);
  return version;
};

const runCommandWithUpgradedVersion = async () => {
  const result = await execa({
    stderr: "inherit",
    stdout: "inherit",
  })`${reactiacHome}/bin/reactiac ${Deno.args}`;
  Deno.exit(result.exitCode);
};

const performUpdateCheck = async (fetch = false, autoUpgrade: boolean) => {
  debug("ReactIAC Cli version", runtimeVersion);
  debug("Deno build %s/%s", Deno.version.deno, Deno.build.target);

  if (Deno.env.get("REACTIAC_UPDATE_CHECK_SKIP")) {
    debug("skip update check by REACTIAC_UPDATE_CHECK_SKIP");
    return;
  }

  const updateCheckFile = `${
    Deno.env.get("HOME")
  }/.reactiac/states/update-check-${todayYYYYMMDD()}`;
  if (existsSync(updateCheckFile)) {
    debug("skip update check as file %s exists", updateCheckFile);
    return;
  }

  const statesDir = `${reactiacHome}/states`;
  if (!existsSync(statesDir)) {
    Deno.mkdirSync(statesDir, { recursive: true });
  }

  await cleanUpdateCheck();

  if (fetch) {
    try {
      const version = await fetchLatestVersion();
      writeLatestVersion(version);
      const latestVersion = version.latest;
      if (latestVersion !== runtimeVersion) {
        if (autoUpgrade) {
          console.log(`Performing auto-upgrade to ${latestVersion} ...`);
          await upgradeToVersion(latestVersion);
          await runCommandWithUpgradedVersion();
        } else {
          console.log(
            `A new release of ReactIAC is available: ${
              chalk.dim(runtimeVersion)
            } → ${chalk.green(latestVersion)}`,
          );
          console.log(`Run ${chalk.yellow("reactiac upgrade")} to install it`);
        }
      }
      createUpdateCheckFile();
    } catch (error) {
      debug("error %O", error);
      console.warn("Failed to check for new ReactIAC updates");
    }
  }
};

export const updateCheck = async (fetch = false) => {
  if (!Deno.build.standalone) {
    debug("skip update check as running in deno");
    return;
  }
  const autoUpgrade = Boolean(
    Deno.env.get("REACTIAC_UPDATE_CHECK_AUTO_UPGRADE"),
  );
  if (autoUpgrade) {
    debug("auto-upgrade is enabled, check updates syncronously");
    await performUpdateCheck(fetch, autoUpgrade);
  } else {
    debug("auto-upgrade is disabled, check updates asyncronously");
    performUpdateCheck(fetch, autoUpgrade);
  }
};

// rm -f ~/.reactiac/states/update-check-*; (cd cli ; deno task run -h --debug)

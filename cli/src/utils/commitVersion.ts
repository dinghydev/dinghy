import { existsSync } from "jsr:@std/fs";
import { execaSync } from "npm:execa";

export const baseVersion = (projectRoot?: string) => {
  const workingDir = projectRoot || Deno.cwd();
  const baseVersionFile = `${workingDir}/.base-version`;
  if (existsSync(baseVersionFile)) {
    return Deno.readTextFileSync(baseVersionFile).trim();
  }
  return "UNKNOWN";
};

export const commitVersion = (projectRoot?: string) => {
  const versionFile = `${projectRoot}/.versions.json`;
  if (existsSync(versionFile)) {
    const versions = JSON.parse(Deno.readTextFileSync(versionFile));
    return versions.release;
  }

  const workingDir = projectRoot || Deno.cwd();
  if (existsSync(`${workingDir}/.git`)) {
    const gitInfo = (args: string) =>
      execaSync({
        cwd: workingDir,
        env: { TZ: "UTC0" },
        stripFinalNewline: true,
      })`git ${args.split(" ")}`.stdout;

    const revCount = () =>
      Deno.env.get("COMMIT_REV_COUNT") || gitInfo("rev-list --count HEAD");

    const commitTime = () =>
      gitInfo("log -1 --format=%cd --date=format:%Y%m%d-%H%M%S");
    const shortCommit = () => gitInfo("rev-parse --short HEAD");
    const commitDirty = () => {
      try {
        gitInfo("diff --quiet HEAD");
        return "";
      } catch (_) {
        return `-dirty-${
          new Date().toISOString().split(".")[0].replace(/\W/g, "")
        }`;
      }
    };

    return `${
      baseVersion(workingDir)
    }.${revCount()}-${commitTime()}-${shortCommit()}${commitDirty()}`;
  }
  return "UNKNOWN";
};

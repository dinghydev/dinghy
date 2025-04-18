import { existsSync } from "@std/fs/exists";
import { resolve } from "@std/path";
import {
  appHomeMount,
  containerAppHome,
  hostAppHome,
  isInsideContainer,
  reactiacRc,
} from "./loadConfig.ts";
import { streamCmd } from "./cmd.ts";

const HOST_USER_HOME = Deno.env.get("HOST_USER_HOME") ||
  Deno.env.get("HOME");

type Mount = {
  source: string;
  target: string;
  check?: string;
};

type Env = Record<string, any>;

const HOME_MOUNTS = [
  ".aws",
  ".ssh",
  ".npmrc",
  ".aws",
];

const GLOBALE_MOUNTS = [
  "/var/run/docker.sock",
];

export const getDockerHostPath = (path: string) =>
  path.startsWith("/") ? path : resolve(hostAppHome, path);

export function getDockerEnvs(appEnvs: Env = {}) {
  // TODO: get AWS_* from Deno.env.toObject
  return {
    ...reactiacRc,
    APP_HOME: appHomeMount,
    HOST_APP_HOME: hostAppHome,
    HOST_USER_HOME,
    ...appEnvs,
  };
}

export function getDockerMounts(
  appMounts: Mount[],
): Mount[] {
  const mounts: Mount[] = [];
  if (!appMounts.find((m) => m.source.startsWith(hostAppHome))) {
    mounts.push({
      source: hostAppHome,
      target: hostAppHome,
    }, {
      source: hostAppHome,
      target: appHomeMount,
    });
  }

  mounts.push(...appMounts.map((mount) => {
    const source = mount.source.startsWith("/")
      ? mount.source
      : resolve(hostAppHome, mount.source);
    const target = mount.target.startsWith("/")
      ? mount.target
      : resolve(containerAppHome, mount.target);
    return {
      ...mount,
      source,
      target,
    };
  }));

  mounts.push(...HOME_MOUNTS.map((file) => ({
    source: `${HOST_USER_HOME}/${file}`,
    target: `/root/${file}`,
    check: `${isInsideContainer ? "/root" : HOST_USER_HOME}/${file}`,
  })));
  mounts.push(...GLOBALE_MOUNTS.map((file) => ({
    source: file,
    target: file,
  })));

  return mounts.filter((mount) => existsSync(mount.check || mount.source));
}

export const runDockerCmd = async (
  workingDir: string,
  appMounts: Mount[],
  args: string[],
  dockerImage: string,
  exitOnFailure = true,
) => {
  return await streamCmd(
    [
      "docker",
      "run",
      "--rm",
      "-t",
      ...Object.entries(getDockerEnvs()).flatMap((
        [k, v],
      ) => ["-e", `${k}=${v}`]),
      ...getDockerMounts(appMounts).flatMap((
        mount,
      ) => ["--volume", `${mount.source}:${mount.target}`]),
      "--workdir",
      workingDir,
      dockerImage,
      ...args,
    ],
    undefined,
    exitOnFailure,
  );
};

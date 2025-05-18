import { projectVersionRelease } from "./projectVersions.ts";

export const runtimeVersion = projectVersionRelease();
export const versionDetails =
  `@reactiac/cli/${runtimeVersion} deno/${Deno.version.deno}-${Deno.build.os}-${Deno.build.arch}`;

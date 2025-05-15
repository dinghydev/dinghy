import { projectVersion } from "./projectVersion.ts";

export const runtimeVersion = projectVersion;
export const versionDetails =
  `@reactiac/cli/${projectVersion} deno/${Deno.version.deno}-${Deno.build.os}-${Deno.build.arch}`;

import latestVersion from '../../../runner/download/latest-version.json' with {
  type: 'json',
}

export const runtimeVersion = latestVersion
export const versionDetails = `reactiac-runner/${runtimeVersion.runner.latest} deno/${Deno.version.deno}-${Deno.build.os}-${Deno.build.arch}`

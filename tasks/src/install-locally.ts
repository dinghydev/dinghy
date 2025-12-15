import { projectRoot } from '../../cli/src/utils/projectRoot.ts'
import { commitVersion } from '../../cli/src/utils/commitVersion.ts'
import { createUpdateCheckFile } from '../../cli/src/utils/updateCheck.ts'

import { execa } from 'execa'
import { dinghyHome } from '../../cli/src/shared/home.ts'

const updateLocalLatestVersion = () => {
  const version = commitVersion(projectRoot)
  const versionFile = `${dinghyHome}/states/latest-version.json`
  const latestVersions = JSON.parse(Deno.readTextFileSync(versionFile))
  const baseVersion = latestVersions.latest.split('.').slice(0, 2).join('.')
  latestVersions.latest = version
  latestVersions[baseVersion] = version
  Deno.writeTextFileSync(versionFile, JSON.stringify(latestVersions, null, 2))
  console.log(`Updated ${version} to ${versionFile}`)
  createUpdateCheckFile()
}

if (import.meta.main) {
  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
    input: `
      set -e
      deno task prepare-build
      deno task docker-build-arm64
      deno task cli-build-aarch64-apple-darwin
      cp ../build/cli/aarch64-apple-darwin/dinghy ~/.dinghy/bin/
      dinghy -h
    `,
  })`sh`
  updateLocalLatestVersion()
}

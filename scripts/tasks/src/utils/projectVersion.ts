import { existsSync } from 'jsr:@std/fs'
import { projectRoot } from './projectRoot.ts'
import { commitVersion } from './commitVersion.ts'

function getProjectVersion() {
  const versionFile = `${projectRoot}/.version`
  if (existsSync(versionFile)) {
    return Deno.readTextFileSync(versionFile).trim()
  }
  return commitVersion(projectRoot)
}

export const projectVersion = getProjectVersion()

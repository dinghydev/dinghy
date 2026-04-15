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

const copySkills = () => {
  const skillsSource = `${projectRoot}/engine/templates/skills`
  const skillsTarget = `${Deno.env.get('HOME')}/.claude/skills`
  for (const entry of Deno.readDirSync(skillsSource)) {
    if (!entry.isDirectory) continue
    const srcFile = `${skillsSource}/${entry.name}/SKILL.md`
    try {
      Deno.statSync(srcFile)
    } catch {
      continue
    }
    const targetDir = `${skillsTarget}/${entry.name}`
    const targetFile = `${targetDir}/SKILL.md`
    try {
      Deno.mkdirSync(targetDir, { recursive: true })
    } catch { /* exists */ }
    try {
      Deno.removeSync(targetFile)
    } catch { /* doesn't exist */ }
    Deno.copyFileSync(srcFile, targetFile)
    console.log(`Copied ${srcFile} -> ${targetFile}`)
  }
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
      rm -f ~/.dinghy/bin/dinghy
      cp ../build/cli/aarch64-apple-darwin/dinghy ~/.dinghy/bin/
      dinghy -h
    `,
  })`sh`
  updateLocalLatestVersion()
  copySkills()
}

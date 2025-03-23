import { execSync } from 'child_process'
import rootPackage from '../package.json' with { type: 'json' }
import { readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export const baseVersion = () =>
  rootPackage.version.split('.').slice(0, 2).join('.')
export const revCount = () =>
  process.env.COMMIT_REV_COUNT ||
  execSync('git rev-list --count HEAD').toString().trim()
export const commitTime = () =>
  execSync('git log -1 --format=%cd --date=format:%Y%m%d-%H%M%S', {
    env: { TZ: 'UTC0' },
  })
    .toString()
    .trim()
export const shortCommit = () =>
  execSync('git rev-parse --short HEAD').toString().trim()
export const commitDirty = () =>
  execSync('git diff --quiet HEAD || echo "-dirty"').toString().trim()
export const commitVersion = () =>
  process.env.COMMIT_VERSION ||
  `${baseVersion()}.${revCount()}-${commitTime()}-${shortCommit()}${commitDirty()}`

function findPackageJsonFilesRecursive(dir: string): string[] {
  const files: string[] = []
  const entries = readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      // Skip node_modules and dist directories
      if (entry.name === 'node_modules' || entry.name === 'dist') {
        continue
      }
      files.push(...findPackageJsonFilesRecursive(fullPath))
    } else if (entry.name === 'package.json') {
      files.push(fullPath)
    }
  }

  return files
}

const findPackageJsonFiles = () => {
  return findPackageJsonFilesRecursive(process.cwd())
}

export function updateReleaseVersion() {
  const version = commitVersion()
  const packageJsonFiles = findPackageJsonFiles()

  for (const file of findPackageJsonFilesRecursive(process.cwd())) {
    console.log(file)
    if (file === 'docker/release/fs-root/workspace/package.json') {
      continue
    }
    const packageJson = require(file)
    packageJson.version = version
    writeFileSync(file, JSON.stringify(packageJson, null, 2))
  }
  return version
}

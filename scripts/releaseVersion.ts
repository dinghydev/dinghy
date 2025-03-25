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
  (rootPackage.version.includes('-')
    ? rootPackage.version
    : `${baseVersion()}.${revCount()}-${commitTime()}-${shortCommit()}${commitDirty()}`)

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

const replaceDependenciesVersion = (dependencies: any, version: string) => {
  for (const dependency in dependencies) {
    if (dependency.startsWith('@reactiac/')) {
      dependencies[dependency] = version
    }
  }
}

export function updatePackageVersion(root: string, noneRoot: string) {
  const cwd = process.cwd()
  for (const file of findPackageJsonFilesRecursive(cwd)) {
    console.log('Updating', file)
    const packageJson = require(file)
    if (file.includes('fs-root')) {
      replaceDependenciesVersion(packageJson.dependencies, noneRoot)
      replaceDependenciesVersion(packageJson.devDependencies, noneRoot)
    } else {
      packageJson.version = file === join(cwd, 'package.json') ? root : noneRoot
    }
    writeFileSync(file, `${JSON.stringify(packageJson, null, 2)}\n`)
  }
  return root
}

export function updateVersion() {
  const version = commitVersion()
  return updatePackageVersion(version, version)
}

export function resetVersion() {
  return updatePackageVersion(baseVersion(), '0.0.0')
}

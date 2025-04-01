import * as cli from 'jsr:@std/cli'
import { projectRoot } from '../../../cli/src/utils/projectRoot.ts'
import {
  commitVersion,
  baseVersion,
} from '../../../cli/src/utils/commitVersion.ts'
import { walkSync } from 'jsr:@std/fs/walk'

async function findPackageJsonFilesRecursive(dir: string): Promise<string[]> {
  return walkSync(dir, {
    match: ['package.json'],
    skip: ['node_modules'],
  }).map((entry) => entry.path)
}

const replaceDependenciesVersion = (dependencies: any, version: string) => {
  for (const dependency in dependencies) {
    if (dependency.startsWith('@reactiac/')) {
      dependencies[dependency] = version
    }
  }
}

function updateLatestVersionFile(version: string) {
  const latest = version.includes('-') ? version : 'latest'
  const file = `${projectRoot}/clients/runner/download/latest-version.json`
  console.log('Updating', file)
  const latestVersion = {
    runner: {
      latest,
    },
    cli: {
      latest,
      '0.1': latest,
      '0.0': latest,
    },
  }
  Deno.writeTextFileSync(file, `${JSON.stringify(latestVersion)}\n`)
}

export async function updatePackageVersion(root: string, noneRoot: string) {
  for (const file of await findPackageJsonFilesRecursive(projectRoot)) {
    console.log('Updating', file)
    const packageJson = (await import(file, { with: { type: 'json' } })).default
    if (file.includes('fs-root')) {
      const version = noneRoot.includes('-') ? noneRoot : 'latest'
      replaceDependenciesVersion(packageJson.dependencies, version)
      replaceDependenciesVersion(packageJson.devDependencies, version)
    } else {
      packageJson.version =
        file === `${projectRoot}/package.json` ? root : noneRoot
    }
    Deno.writeTextFileSync(file, `${JSON.stringify(packageJson, null, 2)}\n`)
  }
  updateLatestVersionFile(noneRoot)
  return root
}

const resolveVersion = () => commitVersion(projectRoot)

const args = cli.parseArgs(Deno.args)
const version = await resolveVersion()
switch (args._[0]) {
  case 'update':
    await updatePackageVersion(version, version)
    break
  case 'reset':
    await updatePackageVersion(baseVersion(await resolveVersion()), '0.0.0')
    break
  case 'version':
    console.log(version)
    break
  case 'base':
    console.log(baseVersion(version))
    break
  default:
    console.log('Available options: update, reset, version, base')
}

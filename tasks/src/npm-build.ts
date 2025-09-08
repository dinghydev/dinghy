// https://github.com/denoland/dnt

import { build, emptyDir } from '@deno/dnt'
import { projectVersionRelease } from '../../cli/src/utils/projectVersions.ts'
import { forEachWorkspace } from './utils/workspace.ts'

forEachWorkspace(async (name, srcPath, targetPath, denoJsonc) => {
  console.log('building', name, srcPath)
  await emptyDir(targetPath)

  const dependencies: any = {}
  if (name === '@dinghy/workspace') {
    return
  }
  if (denoJsonc.imports) {
    Object.entries(denoJsonc.imports).map(([k, v]) => {
      const spec = v as string
      const isWorkspaceDependency = spec.startsWith('workspace:')
      const cName = isWorkspaceDependency
        ? k
        : spec.substring(spec.indexOf(':') + 1, spec.lastIndexOf('@'))
      const cVersion = isWorkspaceDependency
        ? 'latest'
        : spec.substring(spec.lastIndexOf('@') + 1)
      dependencies[cName] = cVersion
    })
  }

  await build({
    // packageManager: "pnpm",
    typeCheck: false,
    test: false,
    // declaration: true,
    scriptModule: false,
    entryPoints: [`${srcPath}/src/index.ts`],
    // types: false,
    outDir: targetPath,
    shims: {
      deno: false,
    },
    package: {
      name: name,
      version: projectVersionRelease(),
      dependencies,
    },
    postBuild() {
      if (name === '@dinghy/base-renderer') {
        dependencies['@dinghy/base-components'] = projectVersionRelease()
      } else if (name === '@dinghy/renderer-json') {
        dependencies['@dinghy/base-components'] = projectVersionRelease()
        dependencies['@dinghy/base-renderer'] = projectVersionRelease()
      }
      const packageJson = JSON.parse(
        Deno.readTextFileSync(`${targetPath}/package.json`),
      )
      packageJson.dependencies = dependencies
      delete packageJson._generatedBy
      packageJson.types = './esm/index.d.ts'
      Deno.writeTextFileSync(
        `${targetPath}/package.json`,
        JSON.stringify(packageJson, null, 2),
      )
      // steps to run after building and before running the tests
      // Deno.copyFileSync("LICENSE", "npm/LICENSE");
      //   Deno.copyFileSync(
      //     `${workspaceDir}/README.adoc`,
      //     `${npmDir}/${packageName}/README.adoc`,
      //   )
    },
  })
})

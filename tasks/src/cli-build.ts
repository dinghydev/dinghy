import { parseArgs } from 'jsr:@std/cli'
import { execa } from 'npm:execa'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'
import { projectVersionEngine } from '../../cli/src/utils/projectVersions.ts'

const args = parseArgs(Deno.args)
const arch = args._[0]
const cliSrcFolder = `${projectRoot}/cli`
const cliOutputFolder = `${projectRoot}/build/cli`
const outputFolder = `${cliOutputFolder}/${arch}`
const releaseFolder = `${cliOutputFolder}/release`

const outputFile = `${outputFolder}/dinghy`
const zipFile = `${releaseFolder}/dinghy-${projectVersionEngine()}-${arch}.zip`

await Deno.mkdir(outputFolder, { recursive: true })
await Deno.mkdir(releaseFolder, { recursive: true })

const versionFile = `${projectRoot}/.versions.json`

if (import.meta.main) {
  await execa(
    'deno',
    [
      'compile',
      '-A',
      '--no-check',
      '--include',
      versionFile,
      '--target',
      arch as string,
      '-o',
      outputFile,
      'src/index.ts',
    ],
    {
      cwd: cliSrcFolder,
      stdio: 'inherit',
    },
  )

  await execa(
    `zip`,
    [
      '-j',
      zipFile,
      outputFile,
    ],
    {
      cwd: cliSrcFolder,
      stdio: 'inherit',
    },
  )

  console.log(`CLI built at ${zipFile}`)
}

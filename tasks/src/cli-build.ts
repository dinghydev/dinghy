import { parseArgs } from 'jsr:@std/cli'
import { execa } from 'npm:execa'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'
import { commitVersion } from '../../cli/src/utils/commitVersion.ts'

const args = parseArgs(Deno.args)
const arch = args._[0]
const cliSrcFolder = `${projectRoot}/cli`
const cliOutputFolder = `${projectRoot}/build/cli`
const outputFolder = `${cliOutputFolder}/${arch}`
const zipsFolder = `${cliOutputFolder}/zips`

const outputFile = `${outputFolder}/reactiac`
const zipFile = `${zipsFolder}/reactiac-${arch}.zip`

await Deno.mkdir(outputFolder, { recursive: true })
await Deno.mkdir(zipsFolder, { recursive: true })

const versionFile = `${projectRoot}/.versions.json`

await execa(
  `deno`,
  [
    'compile',
    '-A',
    '--no-check',
    '--include',
    versionFile,
    '--target',
    arch,
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

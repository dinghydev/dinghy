import * as cli from 'jsr:@std/cli@1.0.14'
import { execa } from 'npm:execa@9.5.2'

const args = cli.parseArgs(Deno.args)
console.log(args._[0])

const arch = args._[0]
const outputFolder = `dist/${arch}`
const outputFile = `${outputFolder}/reactiac`
const zipFile = `reactiac-${arch}.zip`
const zipsFolder = 'dist/zips'
const bashCommand = async (cmd: string) => await execa('bash', ['-c', cmd])

await bashCommand(`mkdir -p ${outputFolder}`)
await bashCommand(`mkdir -p ${zipsFolder}`)
await execa(
  `deno`,
  ['compile', '-A', '--target', arch, '-o', outputFile, 'src/index.ts'],
  {
    stdio: 'inherit',
  },
)

// zip the output file
await bashCommand(`zip -j ${zipFile} ${outputFile}`)

// move the zip file to the zips folder
await bashCommand(`mv ${zipFile} ${zipsFolder}`)

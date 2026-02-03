import { existsSync } from '@std/fs/exists'
import type { CmdInput } from '@dinghy/cli'
import Debug from 'debug'
import { resolve } from '@std/path/resolve'
import chalk from 'chalk'
import { runDockerCmd } from '@dinghy/cli'
import { configGetOriginalImage } from '@dinghy/cli'
import { hostAppHome } from '@dinghy/cli'
import { Args } from '@std/cli/parse-args'
const debug = Debug('diagram:png')

export const schema: CmdInput = {
  description: 'Generate png from drawio file',
  options: [
    {
      name: 'file',
      description: 'Path to the drawio file',
      multiple: true,
      alias: 'f',
    },
    {
      name: 'delete-drawio-file-after-render',
      description:
        'Delete the drawio file after successful generation the png file',
      boolean: true,
    },
  ],
  args: [{
    name: 'stack',
    description:
      'Stack name or tsx file name. If not specified, all stacks will be rendered',
  }],
}

const runDrawioCmd = async (
  _args: Args,
  drawioImage: string,
  drawioArgs: string[],
) => {
  return await runDockerCmd(
    hostAppHome,
    {},
    [],
    drawioArgs,
    drawioImage,
    true,
    false,
  )
}

export const run = async (args: Args) => {
  if (!args.output.startsWith('/')) {
    args.output = resolve(`${hostAppHome}/${args.output}`)
  }

  const files: string[] = []
  const file = args.file
  if (file) {
    for (const f of file) {
      if (f.startsWith('/')) {
        files.push(f)
      } else {
        files.push(resolve(`${args.output}/${f}`))
      }
    }
  } else if (existsSync(args.output)) {
    const dir = await Deno.readDir(args.output)
    for await (const entry of dir) {
      if (entry.isFile && entry.name.endsWith('.drawio')) {
        if (!args.stack || entry.name.includes(args.stack)) {
          files.push(`${args.output}/${entry.name}`)
        }
      }
    }
  }
  if (!files.length) {
    throw new Error('No drawio files found')
  }
  const results: any = {}
  let failed = false
  const drawioImage = configGetOriginalImage('drawio')
  for (const file of files) {
    const pngFile = file.replace('.drawio', '.png')
    debug(`generating from ${file}`)
    const pngResult = await runDrawioCmd(args, drawioImage, [
      '-x',
      '-f',
      'png',
      '--scale',
      '2.5',
      '-o',
      pngFile,
      file,
    ])
    if (pngResult!.output?.includes('Export failed')) {
      results[file] = 'FAILED'
      failed = true
    } else {
      debug(`generated -> ${pngFile}`)
      results[file] = pngFile
      if (args['delete-drawio-file-after-render']) {
        await Deno.remove(file)
        debug(`deleted ${file}`)
      }
    }
  }
  console.log('Generated png files:')
  Object.entries(results)
    .map(([file, pngFile]) => {
      if (pngFile === 'FAILED') {
        console.log(chalk.red(`${file} -> ${pngFile}`))
      } else {
        console.log(chalk.green(`${file} -> ${pngFile}`))
      }
    })
  if (failed) {
    console.log(
      chalk.yellow(
        `Likely due to large diagram: https://issues.chromium.org/issues/383356871 .
          \nYou may open the drawio file in desktop drawio app and export manually.`,
      ),
    )
    throw new Error('Failed to generate png')
  }
}

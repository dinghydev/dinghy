import chalk from 'chalk'
import {
  ArgSchema,
  CMD_DEF_SYMBOL,
  CmdDefinition,
  CmdInput,
  OptionSchema,
} from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import { loadCliCommands } from './commands.ts'
import { execa } from 'execa'

export const schema: CmdInput = {
  description: 'Generate metadata for all commands',
  hidden: true,
  options: [
    {
      name: 'output-file',
      description:
        'The file to write the metadata to, if not provided, the metadata will be printed to the console',
      alias: 'o',
    },
  ],
}

export const run = async (args: Args, commands?: any) => {
  if (!commands) {
    commands = await loadCliCommands()
  }
  await generateMetadata(args, commands)
}

const generateMetadata = async (
  args: Args,
  commands: any,
) => {
  const uniqueCommands: CmdDefinition[] = []
  const collectCommands = (cmds: any) => {
    const cmd = cmds[CMD_DEF_SYMBOL]
    if (cmd && !uniqueCommands.includes(cmd)) {
      if (!cmd.schema.hidden) {
        uniqueCommands.push(cmd)
      }
    }
    Object.values(cmds).forEach((child) => {
      collectCommands(child)
    })
  }
  collectCommands(commands)
  const parsedCommands = await Promise.all(uniqueCommands.map(async (cmd) => {
    const { run, name, schema, globalOptions, ...cmdDef } = cmd
    const { args, options, ...restSchema } = schema

    const result = await execa('deno', [
      'doc',
      '--json',
      `src/commands/${cmdDef.srcPath}`,
    ], {
      stdio: 'pipe',
      shell: true,
    })
    const denoDoc: any = JSON.parse(result.stdout)
    const schemaDoc = denoDoc.nodes.find((node: any) => node.name === 'schema')
    const visiableOptions = options
      ? OptionSchema.array().parse(options).filter((option) => !option.hidden)
      : undefined
    return {
      ...cmdDef,
      name: name.join(' '),
      schema: {
        ...restSchema,
        options: visiableOptions?.length ? visiableOptions : undefined,
        args: args?.length ? ArgSchema.array().parse(args) : undefined,
        doc: schemaDoc?.jsDoc?.doc,
        runnable: Boolean(run),
      },
      globalOptions: globalOptions
        ? OptionSchema.array().parse(cmd.globalOptions).filter((option) =>
          !option.hidden
        )
        : undefined,
    }
  }))
  const outputText = JSON.stringify({ commands: parsedCommands }, null, 2)
  if (args['output-file']) {
    Deno.writeTextFileSync(args['output-file'], outputText)
    console.log(chalk.green(`Metadata written to ${args['output-file']}`))
  } else {
    console.log(outputText)
  }
}

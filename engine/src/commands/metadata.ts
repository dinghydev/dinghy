import { CMD_DEF_SYMBOL, metadataRun, metadataSchema } from '@dinghy/cli'
import { loadEngineCommands } from './commands.ts'
import { Args } from '@std/cli/parse-args'
import chalk from 'chalk'

export const schema = {
  ...metadataSchema,
  options: [...metadataSchema.options!, {
    name: 'root-commands',
    description: 'Return only list of the root commands only',
    boolean: true,
  }],
}

export const run = async (args: Args) => {
  const commands = await loadEngineCommands()
  if (args['root-commands']) {
    generateRootCommands(args, commands)
  } else {
    await metadataRun(args, commands)
  }
}

// deno-lint-ignore require-await
const generateRootCommands = async (args: Args, commands: any) => {
  const rows: any[] = []
  Object.entries(commands).sort((a, b) => a[0].localeCompare(b[0])).forEach(
    ([name, value]) => {
      const cmdDef = (value as any)[CMD_DEF_SYMBOL]
      if (cmdDef) {
        if (cmdDef.name[0] === name) {
          rows.push({
            name,
            description: cmdDef.schema.description,
            alias: cmdDef.schema.alias,
          })
        }
      } else {
        rows.push({
          name,
        })
      }
    },
  )
  const outputText = JSON.stringify({ commands: rows }, null, 2)
  if (args['output-file']) {
    Deno.writeTextFileSync(args['output-file'], outputText)
    if (!args['output-file'].startsWith('.tmp.')) {
      console.log(chalk.green(`Metadata written to ${args['output-file']}`))
    }
  } else {
    console.log(outputText)
  }
}

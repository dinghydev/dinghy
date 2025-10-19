import {
  CommandContext,
  Commands,
  commands as cliCommands,
  OPTIONS_SYMBOL,
  projectRoot,
  showHelpInMarkdown,
} from '@dinghy/cli'
import engineCommands from './commands/index.ts'

const commandsDir = `${projectRoot}/sites/www/src/docs/references/commands`
console.log(`Generating docs to ${commandsDir} ...`)

const renderCommand = (context: CommandContext) => {
  context.options = context.commands[OPTIONS_SYMBOL]
  const { mdx, sections } = showHelpInMarkdown(context)
  const typeDir = context.isEngine ? 'engine' : 'cli'

  const outputDir = `${commandsDir}/${[typeDir, ...context.prefix].join('/')}`
  Deno.mkdirSync(outputDir, { recursive: true })
  const outputFile = `${outputDir}/README.mdx`

  Deno.writeTextFileSync(outputFile, mdx.join('\n'))
  console.log(`Generated ${outputFile}`)

  const subCommands = sections['Commands'].concat(sections['Cli Commands'])
  subCommands.map(({ name }) => {
    renderCommand({
      ...context,
      prefix: [...context.prefix, name],
      commands: context.commands[name] as Commands,
    })
  })
}

renderCommand({
  isEngine: false,
  prefix: [],
  commands: cliCommands,
  rootCommands: cliCommands,
} as any)

renderCommand({
  isEngine: true,
  prefix: [],
  commands: engineCommands,
  rootCommands: engineCommands,
} as any)

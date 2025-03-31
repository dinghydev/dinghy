import { type CommandContext, OPTIONS_SYMBOL, OPTIONS_TYPES } from '../types.ts'
import chalk from 'chalk'
import { versionDetails } from './runtimeVersion.ts'
type Row = {
  name: string
  options?: string
  description?: string
}

type Sections = {
  version: Row[]
  usage: Row[]
  commands: Row[]
  options: Row[]
}

type Options = {
  name: string
  type: string
}

const printHelp = (context: CommandContext, sections: Sections) => {
  console.log(`${context.options.cmdDescription}`)
  for (const [name, rows] of Object.entries(sections)) {
    if (rows.length > 0) {
      console.log(chalk.bold(`\n${name.toUpperCase()}`))
      const maxNameLength = rows.reduce(
        (max, row) => Math.max(max, row.name.length),
        0,
      )
      for (const row of rows) {
        console.log(
          `  ${chalk.green(row.name.padEnd(maxNameLength + 2))}${row.options ? `${chalk.dim(row.options)} ` : ''}${row.description ? row.description : ''}`,
        )
      }
    }
  }
}

const generateCommandSection = (
  context: CommandContext,
  sections: Sections,
) => {
  Object.entries(context.commands)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, commandDef]) => {
      const commandOptions = commandDef[OPTIONS_SYMBOL]
      if (commandOptions.hidden) {
        return
      }
      const options = commandOptions.cmdAlias
        ? `[alias:${commandOptions.cmdAlias.join(', ')}]`
        : ''
      sections.commands.push({
        name,
        options,
        description: commandOptions.cmdDescription,
      })
    })
}

const generateOptionsSection = (
  context: CommandContext,
  sections: Sections,
) => {
  const options: Options[] = []
  for (const optionType of OPTIONS_TYPES) {
    for (const option of context.options[optionType] || []) {
      options.push({
        name: option,
        type: optionType,
      })
    }
  }
  options.sort((a, b) => a.name.localeCompare(b.name))
  for (const option of options) {
    const alias = Object.entries(context.options.alias || {}).find(
      ([_key, value]) => value === option.name,
    )?.[0]
    sections.options.push({
      name: `${alias ? `-${alias}, ` : ''}--${option.name}`,
      description: context.options.description[option.name] || '',
    })
  }
}

const generateUsageSection = (context: CommandContext, sections: Sections) => {
  const commandPlaceholder = sections.commands.length ? ' <command>' : ''
  const optionsPlaceholder = sections.options.length ? ' [options]' : ''
  const prefixPlaceholder = context.prefix.length
    ? ` ${context.prefix.join(' ')}`
    : ''
  sections.usage.push({
    name: `  ${chalk.white('$')} reactiac${prefixPlaceholder}${commandPlaceholder}${optionsPlaceholder}`,
  })

  if (context.prefix.length === 0) {
    sections.version.push({
      name: versionDetails,
    })
  }
}

export const showHelp = (context: CommandContext) => {
  const sections = {
    version: [],
    usage: [],
    commands: [],
    options: [],
  }

  generateCommandSection(context, sections)
  generateOptionsSection(context, sections)
  generateUsageSection(context, sections)

  printHelp(context, sections)
}

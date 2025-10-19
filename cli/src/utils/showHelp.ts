import {
  type CommandContext,
  Commands,
  OPTIONS_SYMBOL,
  REQUIRE_ENGINE_SYMBOL,
} from '../types.ts'
import chalk from 'chalk'
import { OPTIONS_TYPES } from './parseOptions.ts'
import { versionDetails } from './projectVersions.ts'
type Row = {
  name: string
  options?: string
  description?: string
  defaultValue?: string
  cmdAlias?: string[]
}

type Sections = {
  version: Row[]
  Usage: Row[]
  Arguments: Row[]
  'Commands': Row[]
  'Cli Commands': Row[]
  'Engine Commands': Row[]
  Options: Row[]
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
        let options = ''
        if (row.cmdAlias) {
          options = `[alias:${row.cmdAlias.join(', ')}] `
        } else if (row.defaultValue !== undefined) {
          options = `[default: ${row.defaultValue}] `
        }
        if (name === 'Usage') {
          console.log(
            `  $ ${chalk.green(row.name)}`,
          )
        } else {
          console.log(
            `  ${chalk.green(row.name.padEnd(maxNameLength + 2))}${
              chalk.dim(options)
            }${row.description ? row.description : ''}`,
          )
        }
      }
    }
  }
}

const printHelpInMarkdown = (context: CommandContext, sections: Sections) => {
  const mdx: string[] = []
  mdx.push(`---
edit_url: none
---
# ${
    context.prefix.length > 0
      ? context.prefix.join(' ')
      : context.isEngine
      ? 'Engine'
      : 'Cli'
  }

${context.options.cmdDescription}
`)
  for (const [name, rows] of Object.entries(sections)) {
    if (name === 'version') {
      continue
    }
    const hasDefaultValue = rows.some((row) => row.defaultValue !== undefined)
    if (rows.length > 0) {
      mdx.push(`## ${name}`)
      if (name.includes('Commands')) {
        const isEngineCommands = name === 'Engine Commands'
        for (const row of rows) {
          mdx.push(
            `- [${context.prefix.join(' ')} ${row.name}](./${
              isEngineCommands ? '../engine' : ''
            }/${row.name}/README.mdx)`,
          )
        }

        continue
      }

      const isUsage = name === 'Usage'

      if (isUsage) {
        mdx.push(`\`\`\`sh`)
      } else {
        mdx.push(
          `| Name            | Description           ${
            hasDefaultValue ? '| Default         ' : ''
          }          |
| ---------------- ${
            hasDefaultValue ? '| --------------- ' : ''
          }| ----------------------------- |`,
        )
      }
      for (const row of rows) {
        if (isUsage) {
          mdx.push(
            `$ ${row.name}`,
          )
        } else {
          mdx.push(
            `| \`${row.name}\` | ${row.description ? row.description : ''} ${
              hasDefaultValue
                ? `| ${
                  row.defaultValue !== undefined
                    ? `\`${row.defaultValue}\``
                    : ''
                } `
                : ''
            } |`,
          )
        }
      }
      if (isUsage) {
        mdx.push(`\`\`\``)
      }
    }
  }
  return mdx
}

const generateArgumentsSection = (
  context: CommandContext,
  sections: Sections,
) => {
  Object.entries(context.options.arguments || {}).map(([name, argDef]) => {
    sections.Arguments.push({
      name: name.toLocaleUpperCase(),
      description: argDef.description,
      defaultValue: argDef.default,
    })
  })
}

const generateCommandSection = (
  context: CommandContext,
  sections: Sections,
) => {
  const cliCommands: Row[] = []
  const engineCommands: Row[] = []
  Object.entries(context.commands)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, commandDef]) => {
      const commandOptions = commandDef[OPTIONS_SYMBOL]
      if (commandOptions.hidden) {
        return
      }
      const { cmdAlias } = commandOptions
      ;(commandDef[REQUIRE_ENGINE_SYMBOL] ? engineCommands : cliCommands).push({
        name,
        cmdAlias,
        description: commandOptions.cmdDescription,
      })
    })
  if (cliCommands.length && engineCommands.length) {
    sections['Cli Commands'] = cliCommands
    sections['Engine Commands'] = engineCommands
  } else {
    sections['Commands'].push(...cliCommands, ...engineCommands)
  }
}

const generateOptionsSection = (
  context: CommandContext,
  sections: Sections,
) => {
  const options: Options[] = []
  const flagsHidden = context.options.flagsHidden || []
  for (const optionType of OPTIONS_TYPES) {
    for (const option of context.options[optionType] || []) {
      if (flagsHidden.includes(option)) {
        continue
      }
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
    const noFlag = (context.options.negatable || []).includes(option.name)
      ? '[no]-'
      : ''
    const defaultValue = context.options.default?.[option.name] as any
    sections.Options.push({
      name: `${alias ? `-${alias}, ` : ''}--${noFlag}${option.name}`,
      description: context.options.description[option.name] || '',
      defaultValue,
    })
  }
}

const resolveCommandName = (commands: Commands, parent: Commands) => {
  let cmdName
  Object.entries(parent).forEach(([name, command]) => {
    if (command === commands) {
      cmdName = name
    }
  })
  if (!cmdName) {
    Object.values(parent).forEach((command) => {
      const name = resolveCommandName(commands, command)
      if (name) {
        cmdName = name
      }
    })
  }
  return cmdName!
}

const resolveCommandNameAndAlias = (context: CommandContext) => {
  const results: string[] = []
  const { prefix } = context
  if (prefix.length === 0) {
    results.push('')
  } else {
    const cmdPrefix = prefix.slice(0, -1)
    results.push(
      ` ${
        [
          ...cmdPrefix,
          resolveCommandName(context.commands, context.rootCommands),
        ].join(' ')
      }`,
    )
    for (const alias of context.options.cmdAlias || []) {
      results.push(` ${[...cmdPrefix, alias].join(' ')}`)
    }
  }
  return results
}

const generateUsageSection = (context: CommandContext, sections: Sections) => {
  const argumentsPlaceholder = sections.Arguments.length
    ? ` ${
      Object.entries(context.options.arguments || {})
        .map(([name, spec]) =>
          spec.required
            ? name.toLocaleUpperCase()
            : `[${name.toLocaleUpperCase()}]`
        )
        .join(' ')
    }`
    : ''
  const commandPlaceholder = sections['Commands'].length ? ' <command>' : ''
  const optionsPlaceholder = sections.Options.length ? ' [options]' : ''
  resolveCommandNameAndAlias(context).map((command) => {
    sections.Usage.push({
      name:
        `dinghy${command}${argumentsPlaceholder}${commandPlaceholder}${optionsPlaceholder}`,
    })
  })

  if (context.prefix.length === 0) {
    sections.version.push({
      name: versionDetails(),
    })
  }
}

const generateHelpData = (context: CommandContext) => {
  const sections = {
    version: [],
    Usage: [],
    Arguments: [],
    'Commands': [],
    'Cli Commands': [],
    'Engine Commands': [],
    Options: [],
    ...(context.options?.additionalOptions || {}),
  }

  generateArgumentsSection(context, sections)
  generateCommandSection(context, sections)
  generateOptionsSection(context, sections)
  generateUsageSection(context, sections)

  return sections
}

export const showHelp = (context: CommandContext) => {
  const sections = generateHelpData(context)
  printHelp(context, sections)
}

export const showHelpInMarkdown = (context: CommandContext) => {
  const sections = generateHelpData(context)
  const mdx = printHelpInMarkdown(context, sections)
  return { mdx, sections }
}

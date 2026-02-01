import chalk from 'chalk'
import { versionDetails } from '../../utils/projectVersions.ts'
import { CMD_DEF_SYMBOL, CmdDefinition, OptionType } from './types.ts'
import { runEngineCommand } from '../docker/runEngineCommand.ts'
type Row = {
  name: string
  options?: string
  description?: string
  defaultValue?: string
  alias?: string[]
}

type Sections = {
  version: Row[]
  Usage: Row[]
  Arguments: Row[]
  'Commands': Row[]
  'Cli Commands': Row[]
  'Engine Commands': Row[]
  Options: Row[]
  'Global Options': Row[]
}

const printHelp = (cmdDef: CmdDefinition, sections: Sections) => {
  if (cmdDef.schema.description) {
    console.log(cmdDef.schema.description)
  }
  for (const [name, rows] of Object.entries(sections)) {
    if (rows.length > 0) {
      console.log(chalk.bold(`\n${name.toUpperCase()}`))
      const maxNameLength = rows.reduce(
        (max, row) => Math.max(max, row.name.length),
        0,
      )
      for (const row of rows) {
        let options = ''
        if (row.alias) {
          options = `[alias:${row.alias.join(', ')}] `
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

const generateArgumentsSection = (
  cmdDef: CmdDefinition,
  sections: Sections,
) => {
  cmdDef.schema.args?.forEach((arg) => {
    sections.Arguments.push({
      name: arg.name.toLocaleUpperCase(),
      description: arg.description,
      defaultValue: arg.default,
    })
  })
}

const generateCommandSection = async (
  cmdDef: CmdDefinition,
  sections: Sections,
  commands: any,
  isEngine: boolean,
) => {
  const subCommands: Row[] = []
  Object.entries(commands)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, commandDef]: [string, any]) => {
      const subCommandDef = commandDef[CMD_DEF_SYMBOL]
      if (subCommandDef) {
        if (subCommandDef.schema.hidden) {
          return
        } else {
          if (subCommandDef.schema.alias) {
            const alias: string[] = []
            subCommandDef.schema.alias.forEach((as: string | string[]) => {
              if (!Array.isArray(as)) {
                alias.push(as)
              }
            })
            if (name === subCommandDef.name[subCommandDef.name.length - 1]) {
              subCommands.push({
                name,
                alias,
                description: subCommandDef.schema.description,
              })
            }
          } else {
            subCommands.push({
              name,
              description: subCommandDef.schema.description,
            })
          }
        }
      } else {
        subCommands.push({
          name,
        })
      }
    })

  if (!isEngine && cmdDef.name.length === 0) {
    sections['Cli Commands'] = subCommands
    sections['Engine Commands'] = await resolveEngineRootCommands()
  } else {
    sections['Commands'] = subCommands
  }
}

const generateOptionsSection = (
  options: OptionType[] | undefined,
  section: Row[],
) => {
  const addedOptionsKeys: string[] = []
  const collectedOptions: OptionType[] = []
  options
    ?.filter((option) => !option.hidden)
    ?.reverse()
    ?.forEach(
      (option) => {
        if (!addedOptionsKeys.includes(option.name)) {
          addedOptionsKeys.push(option.name)
          collectedOptions.push(option)
        }
      },
    )

  collectedOptions.sort((a, b) => a.name.localeCompare(b.name))
    .forEach(
      (option) => {
        const alias = option.alias ? `-${option.alias}, ` : ''
        const name = option.boolean
          ? `${alias}--${(option.negatable ? '[no]-' : '')}${option.name}`
          : option.multiple
          ? `[${alias}--${option.name}=<value>]`
          : `${alias}--${option.name}=<value>`
        section.push({
          name,
          description: option.description,
          defaultValue: option.default,
        })
      },
    )
}

const resolveCommandNameAndAlias = (cmdDef: CmdDefinition) => {
  const results: string[] = []
  results.push(cmdDef.name.join(' '))
  cmdDef.schema.alias?.forEach((alias) => {
    if (Array.isArray(alias)) {
      results.push(alias.join(' '))
    } else {
      results.push([...cmdDef.name.slice(0, -1), alias].join(' '))
    }
  })
  return results
}

const generateVersionSection = (sections: Sections) => {
  versionDetails().map((version) => {
    sections.version.push({
      name: version,
    })
  })
}

const generateGlobalOptionsSection = (
  cmdDef: CmdDefinition,
  sections: Sections,
) => {
  if (cmdDef.globalOptions) {
    generateOptionsSection(
      cmdDef.globalOptions as OptionType[],
      sections['Global Options'],
    )
  }
}

const generateUsageSection = (cmdDef: CmdDefinition, sections: Sections) => {
  const usageSurfix: string[] = []
  if (
    sections['Commands'].length || sections['Cli Commands'].length ||
    sections['Engine Commands'].length
  ) {
    usageSurfix.push('<command>')
  }
  cmdDef.schema.args?.forEach((arg) => {
    if (arg.required) {
      usageSurfix.push(arg.name.toLocaleUpperCase())
    } else {
      usageSurfix.push(`[${arg.name.toLocaleUpperCase()}]`)
    }
  })
  if (sections.Options.length) {
    usageSurfix.push('[options]')
  }
  const surfix = usageSurfix.join(' ')
  resolveCommandNameAndAlias(cmdDef).map((command) => {
    sections.Usage.push({
      name: `dinghy${command ? ` ${command}` : ''} ${surfix}`,
    })
  })
}

const generateHelpData = async (
  cmdDef: CmdDefinition,
  commands: any,
  isEngine: boolean,
) => {
  const sections = {
    version: [],
    Usage: [],
    Arguments: [],
    Options: [],
    'Commands': [],
    'Cli Commands': [],
    'Engine Commands': [],
    'Global Options': [],
  }

  await generateCommandSection(cmdDef, sections, commands, isEngine)
  generateArgumentsSection(cmdDef, sections)
  generateOptionsSection(cmdDef.schema?.options, sections.Options)
  generateUsageSection(cmdDef, sections)
  generateGlobalOptionsSection(cmdDef, sections)
  if (cmdDef.name.length === 0) {
    generateVersionSection(sections)
  }
  return sections
}

export const showHelp = async (
  cmdDef: CmdDefinition,
  commands: any,
  isEngine: boolean,
) => {
  const sections = await generateHelpData(cmdDef, commands, isEngine)
  printHelp(cmdDef, sections)
}

const resolveEngineRootCommands = async () => {
  const outputFile = '.tmp.engine-root-commands.json'
  await runEngineCommand([
    'metadata',
    '--root-commands',
    '--output-file',
    outputFile,
  ])
  const output = Deno.readTextFileSync(outputFile)
  const engineRootCommands = JSON.parse(output).commands
  Deno.removeSync(outputFile)
  return engineRootCommands
}

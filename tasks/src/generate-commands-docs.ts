import { execa } from 'execa'
import path from 'node:path'

const commandsDir = `../sites/www/src/docs/references/commands`
console.log(`Generating commands docs to ${commandsDir} ...`)

const renderCommand = (type: string, command: any, commands: any[]) => {
  console.log(`Rendering ${type} command: ${command.name} ...`)
  const outputDir = `${commandsDir}/${
    [type.toLowerCase(), ...command.name.split(' ')].join('/')
  }`
  console.log(`Output dir: ${outputDir}`)
  Deno.mkdirSync(outputDir, { recursive: true })
  const outputFile = `${outputDir}/README.mdx`
  const hasSubCommands = commands.some((c) =>
    c !== command && c.name.startsWith(command.name)
  )

  const mdx: string[] = []
  addHeader(mdx, type, command)
  addUsage(mdx, hasSubCommands, command)
  addSubCommands(hasSubCommands, mdx, commands, command)
  addArguments(mdx, command)
  addOptions(mdx, 'Options', command.schema.options)
  addOptions(mdx, 'Global Options', command.globalOptions)
  if (command.schema.doc) {
    mdx.push(command.schema.doc)
  }

  Deno.writeTextFileSync(outputFile, mdx.join('\n'))
  console.log(`Generated ${outputFile}`)
}

const renderCommands = async (type: 'Cli' | 'Engine') => {
  console.log(`Rendering ${type} commands ...`)
  const projectRoot = path.resolve(Deno.cwd(), '..', type.toLowerCase())
  const outputFile =
    `${Deno.cwd()}/../build/tmp.${type.toLowerCase()}-commands.json`
  await execa('deno', [
    'run',
    '-A',
    'src/index.ts',
    'metadata',
    '--output-file',
    outputFile,
  ], {
    cwd: projectRoot,
    stdio: 'pipe',
  })
  console.log(`Output file: ${outputFile}`)
  const metadata = JSON.parse(Deno.readTextFileSync(outputFile))
  const commands = metadata.commands.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  )
  for (const command of commands) {
    renderCommand(type, command, commands)
  }
}

Deno.mkdirSync(path.resolve(Deno.cwd(), '..', 'build'), { recursive: true })
await renderCommands('Cli')
await renderCommands('Engine')

function addArguments(
  mdx: string[],
  command: any,
) {
  addSectionWithDefault(
    mdx,
    'Arguments',
    command.schema.args,
    (option: any) => {
      return option.name
    },
  )
}

function addOptions(
  mdx: string[],
  title: string,
  options: any,
) {
  addSectionWithDefault(mdx, title, options, (option: any) => {
    const alias = option.alias ? `-${option.alias}, ` : ''
    const name = option.boolean
      ? `${alias}--${(option.negatable ? '[no]-' : '')}${option.name}`
      : option.multiple
      ? `[${alias}--${option.name} <value>]`
      : `${alias}--${option.name} <value>`
    return name
  })
}
function addSectionWithDefault(
  mdx: string[],
  title: string,
  options: any,
  nameFunction: (option: any) => string,
) {
  if (options) {
    mdx.push(`## ${title}`)
    const hasDefaultValue = options.some((option: any) =>
      option.default !== undefined
    )
    mdx.push(
      `| Name            | Description           ${
        hasDefaultValue ? '| Default         ' : ''
      }          |`,
    )
    mdx.push(
      `| ---------------- ${
        hasDefaultValue ? '| --------------- ' : ''
      }| ----------------------------- |`,
    )
    options.forEach((option: any) => {
      mdx.push(
        `| \`${nameFunction(option)}\` |${
          option.description.replaceAll('|', ' \\|')
        } ${typeof option.env === 'string' ? `\`${option.env}\`` : ''}${
          hasDefaultValue
            ? `| ${option.default !== undefined ? `\`${option.default}\`` : ''}`
            : ''
        } |`,
      )
    })
  }
}

function addSubCommands(
  hasSubCommands: boolean,
  mdx: string[],
  commands: any[],
  command: any,
) {
  if (hasSubCommands) {
    mdx.push(`## Commands`)
    for (
      const subCommand of commands.filter((c) =>
        c !== command && c.name.startsWith(command.name) &&
        !c.name.substring(command.name.length + 1).includes(' ')
      )
    ) {
      const folderName = subCommand.name.split(' ').slice(-1)[0]
      mdx.push(
        `- [${subCommand.name}](./${folderName}/README.mdx)`,
      )
    }
  }
}

function addUsage(mdx: string[], hasSubCommands: boolean, command: any) {
  mdx.push(`## Usage`)
  mdx.push(`\`\`\`sh`)

  const cmdPrefix: string[] = ['dinghy']
  const commandSignature: string[] = []
  if (hasSubCommands) {
    if (command.schema.runnable) {
      commandSignature.push('[command]')
    } else {
      commandSignature.push('<command>')
    }
  }
  command.schema.args?.forEach((arg: any) => {
    if (arg.required) {
      commandSignature.push(arg.name.toLocaleUpperCase())
    } else {
      commandSignature.push(`[${arg.name.toLocaleUpperCase()}]`)
    }
  })
  if (command.schema.runnable) {
    commandSignature.push('[options]')
  }
  mdx.push(
    `$ ${
      [
        ...cmdPrefix,
        ...command.name.split(' ').filter((name: any) => name !== ''),
        ...commandSignature,
      ].join(' ')
    }`,
  )
  for (const alias of (command.schema.alias || [])) {
    if (Array.isArray(alias)) {
      mdx.push(
        `$ ${[...cmdPrefix, ...alias, ...commandSignature].join(' ')}`,
      )
    } else {
      mdx.push(
        `$ ${
          [
            ...cmdPrefix,
            ...command.name.split(' ').slice(0, -1),
            alias,
            ...commandSignature,
          ].join(' ')
        }`,
      )
    }
  }
  mdx.push(`\`\`\``)
}

function addHeader(mdx: string[], type: string, command: any) {
  mdx.push(`---`)
  mdx.push(
    `edit_url: https://github.com/dinghydev/dinghy/blob/main/${type.toLowerCase()}/src/commands/${command.srcPath}`,
  )
  mdx.push(`---`)
  mdx.push(`# ${command.name || type}`)
  mdx.push(`${command.schema.description}`)
}

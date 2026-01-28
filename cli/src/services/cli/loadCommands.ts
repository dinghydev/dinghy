import { walk } from '@std/fs'
import { CMD_DEF_SYMBOL, CmdDefinition } from './types.ts'
import Debug from 'debug'
const debug = Debug('loadCommands')

export const loadCommands = async (cmdsFolder: string) => {
  const commands = {} as any

  const addToCmdTree = (
    parent: any,
    cmdDefinition: CmdDefinition,
    path: string[],
  ) => {
    if (path.length === 0) {
      parent[CMD_DEF_SYMBOL] = cmdDefinition
    } else {
      const child = path[0]
      parent[child] ??= {}
      addToCmdTree(parent[child], cmdDefinition, path.slice(1))
    }
  }

  const registerCommand = (cmdDefinition: CmdDefinition) => {
    debug(
      'registering command [%s] from %s',
      cmdDefinition.name.join(' '),
      cmdDefinition.srcPath,
    )
    addToCmdTree(commands, cmdDefinition, cmdDefinition.name)
    cmdDefinition.schema.alias?.map((alias: string | string[]) => {
      if (Array.isArray(alias)) {
        addToCmdTree(commands, cmdDefinition, alias)
      } else {
        addToCmdTree(commands, cmdDefinition, [
          ...cmdDefinition.name.slice(0, -1),
          alias,
        ])
      }
    })
  }
  for await (const entry of walk(cmdsFolder, { includeDirs: false })) {
    const relativePath = entry.path.substring(cmdsFolder.length + 1)
    const importedCommand = await import(entry.path)
    if (importedCommand.schema) {
      const name = relativePath.replace('.ts', '').split('/')
      if (name[name.length - 1] === 'index') {
        name.pop()
      }
      registerCommand({
        srcPath: relativePath,
        name,
        ...importedCommand,
      })
    }
  }
  return commands
}

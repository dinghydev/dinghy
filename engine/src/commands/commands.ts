import { loadCommands } from '@dinghy/cli'

export const loadEngineCommands = async () => {
  return await loadCommands(
    import.meta.url.split('/').slice(2, -1).join('/'),
  )
}

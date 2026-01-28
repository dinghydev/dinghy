import { loadCommands } from '../services/cli/loadCommands.ts'

//hack to force deno to include in the cli build
import { schema as _indexSchema } from './index.ts'
import { schema as _infoSchema } from './info.ts'
import { schema as _metadataSchema } from './metadata.ts'
import { schema as _devcontainerSchema } from './devcontainer.ts'
import { schema as _upgradeSchema } from './upgrade.ts'
import { schema as _postinstallSchema } from './postinstall.ts'
import { schema as _initSchema } from './init.ts'
import { schema as _dockerSchema } from './docker/index.ts'
import { schema as _dockerBuildSchema } from './docker/build.ts'
import { schema as _dockerCacheSchema } from './docker/cache.ts'
import { schema as _dockerRepublishSchema } from './docker/republish.ts'

export const loadCliCommands = async () => {
  return await loadCommands(
    import.meta.url.split('/').slice(2, -1).join('/'),
  )
}

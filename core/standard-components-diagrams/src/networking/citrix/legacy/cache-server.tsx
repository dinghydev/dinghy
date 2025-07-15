import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CACHE_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.cache_server;',
  _width: 71,
  _height: 97.5,
}

export function CacheServer(props: DiagramNodeProps) {
  return <Shape {...CACHE_SERVER} {...props} />
}

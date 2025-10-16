import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CACHE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.cache_server;',
  },
  _width: 71,
  _height: 97.5,
}

export function CacheServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CACHE_SERVER}
      {...props}
      _style={extendStyle(CACHE_SERVER, props)}
    />
  )
}

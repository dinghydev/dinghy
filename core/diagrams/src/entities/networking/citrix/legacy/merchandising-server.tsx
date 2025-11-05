import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MERCHANDISING_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.merchandising_server;',
  },
  _original_width: 75,
  _original_height: 90,
}

export function MerchandisingServer(props: NodeProps) {
  return (
    <Shape
      {...MERCHANDISING_SERVER}
      {...props}
      _style={extendStyle(MERCHANDISING_SERVER, props)}
    />
  )
}

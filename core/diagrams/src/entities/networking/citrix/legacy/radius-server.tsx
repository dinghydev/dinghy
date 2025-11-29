import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RADIUS_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.radius_server;',
  },
  _original_width: 75.5,
  _original_height: 91,
}

export function RadiusServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RADIUS_SERVER)} />
}

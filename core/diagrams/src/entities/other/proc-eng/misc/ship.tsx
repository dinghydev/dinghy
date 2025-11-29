import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHIP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.ship',
  },
  _width: 105,
  _height: 60,
}

export function Ship(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHIP)} />
}

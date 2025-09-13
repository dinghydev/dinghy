import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHIP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.ship',
  },
  _width: 105,
  _height: 60,
}

export function Ship(props: DiagramNodeProps) {
  return <Shape {...SHIP} {...props} _style={extendStyle(SHIP, props)} />
}

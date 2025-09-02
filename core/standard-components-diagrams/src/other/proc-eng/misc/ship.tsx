import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHIP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.ship',
  },
  _original_width: 105,
  _original_height: 60,
}

export function Ship(props: DiagramNodeProps) {
  return <Shape {...SHIP} {...props} _style={extendStyle(SHIP, props)} />
}

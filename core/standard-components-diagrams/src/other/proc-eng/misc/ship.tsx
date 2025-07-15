import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHIP = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.ship',
  _width: 105,
  _height: 60,
}

export function Ship(props: DiagramNodeProps) {
  return <Shape {...SHIP} {...props} />
}

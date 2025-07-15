import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorRight;aspect=fixed;',
  _width: 80,
  _height: 85,
}

export function Door2(props: DiagramNodeProps) {
  return <Shape {...DOOR_2} {...props} />
}

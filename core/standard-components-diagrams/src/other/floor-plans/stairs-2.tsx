import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STAIRS_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.stairs;direction=south;',
  _width: 100,
  _height: 300,
}

export function Stairs2(props: DiagramNodeProps) {
  return <Shape {...STAIRS_2} {...props} />
}

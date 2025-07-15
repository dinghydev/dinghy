import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STAIRS = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.stairs;',
  _width: 300,
  _height: 100,
}

export function Stairs(props: DiagramNodeProps) {
  return <Shape {...STAIRS} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RANGE_1 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.range_1;',
  _width: 50,
  _height: 62,
}

export function Range1(props: DiagramNodeProps) {
  return <Shape {...RANGE_1} {...props} />
}

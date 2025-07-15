import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELEVATOR = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.elevator;',
  _width: 100,
  _height: 100,
}

export function Elevator(props: DiagramNodeProps) {
  return <Shape {...ELEVATOR} {...props} />
}

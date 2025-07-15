import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONVEYOR_2 = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.conveyor2;',
  _width: 200,
  _height: 60,
}

export function Conveyor2(props: DiagramNodeProps) {
  return <Shape {...CONVEYOR_2} {...props} />
}

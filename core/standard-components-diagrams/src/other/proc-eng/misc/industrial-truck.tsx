import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUSTRIAL_TRUCK = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.industrial_truck;pointerEvents=1;',
  _width: 120,
  _height: 20,
}

export function IndustrialTruck(props: DiagramNodeProps) {
  return <Shape {...INDUSTRIAL_TRUCK} {...props} />
}

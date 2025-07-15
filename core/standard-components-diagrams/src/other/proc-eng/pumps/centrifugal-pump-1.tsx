import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGAL_PUMP_1 = {
  _style:
    'shape=mxgraph.pid.pumps.centrifugal_pump_1;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 70,
  _height: 67,
}

export function CentrifugalPump1(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGAL_PUMP_1} {...props} />
}

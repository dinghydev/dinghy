import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGAL_PUMP_2 = {
  _style:
    'shape=mxgraph.pid.pumps.centrifugal_pump_2;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 62,
  _height: 77,
}

export function CentrifugalPump2(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGAL_PUMP_2} {...props} />
}

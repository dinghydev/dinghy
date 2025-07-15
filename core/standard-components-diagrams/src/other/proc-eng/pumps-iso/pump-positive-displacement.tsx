import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUMP_POSITIVE_DISPLACEMENT = {
  _style:
    'shape=mxgraph.pid.pumps_-_iso.pump_(positive_displacement);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function PumpPositiveDisplacement(props: DiagramNodeProps) {
  return <Shape {...PUMP_POSITIVE_DISPLACEMENT} {...props} />
}

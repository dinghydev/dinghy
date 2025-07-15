import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEAT_EXCHANGER_SPIRAL = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(spiral);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function HeatExchangerSpiral(props: DiagramNodeProps) {
  return <Shape {...HEAT_EXCHANGER_SPIRAL} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPIRAL_HEAT_EXCHANGER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.spiral_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 95,
}

export function SpiralHeatExchanger(props: DiagramNodeProps) {
  return <Shape {...SPIRAL_HEAT_EXCHANGER} {...props} />
}

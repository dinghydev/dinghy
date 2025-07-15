import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEAT_EXCHANGER_STRAIGHT_TUBES = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(straight_tubes);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 30,
}

export function HeatExchangerStraightTubes(props: DiagramNodeProps) {
  return <Shape {...HEAT_EXCHANGER_STRAIGHT_TUBES} {...props} />
}

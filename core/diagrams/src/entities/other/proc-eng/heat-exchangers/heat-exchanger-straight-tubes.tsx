import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEAT_EXCHANGER_STRAIGHT_TUBES = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(straight_tubes);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 30,
}

export function HeatExchangerStraightTubes(props: NodeProps) {
  return (
    <Shape
      {...HEAT_EXCHANGER_STRAIGHT_TUBES}
      {...props}
      _style={extendStyle(HEAT_EXCHANGER_STRAIGHT_TUBES, props)}
    />
  )
}

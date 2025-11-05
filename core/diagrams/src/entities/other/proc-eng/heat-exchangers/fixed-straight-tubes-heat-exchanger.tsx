import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIXED_STRAIGHT_TUBES_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.fixed_straight_tubes_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 40,
}

export function FixedStraightTubesHeatExchanger(props: NodeProps) {
  return (
    <Shape
      {...FIXED_STRAIGHT_TUBES_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(FIXED_STRAIGHT_TUBES_HEAT_EXCHANGER, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIXED_STRAIGHT_TUBES_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.fixed_straight_tubes_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function FixedStraightTubesHeatExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIXED_STRAIGHT_TUBES_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(FIXED_STRAIGHT_TUBES_HEAT_EXCHANGER, props)}
    />
  )
}

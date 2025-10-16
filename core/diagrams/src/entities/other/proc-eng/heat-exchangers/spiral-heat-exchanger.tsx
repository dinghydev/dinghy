import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPIRAL_HEAT_EXCHANGER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.spiral_heat_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 95,
}

export function SpiralHeatExchanger(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPIRAL_HEAT_EXCHANGER}
      {...props}
      _style={extendStyle(SPIRAL_HEAT_EXCHANGER, props)}
    />
  )
}

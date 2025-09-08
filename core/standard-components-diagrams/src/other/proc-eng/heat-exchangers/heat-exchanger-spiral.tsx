import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEAT_EXCHANGER_SPIRAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(spiral);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function HeatExchangerSpiral(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_EXCHANGER_SPIRAL}
      {...props}
      _style={extendStyle(HEAT_EXCHANGER_SPIRAL, props)}
    />
  )
}

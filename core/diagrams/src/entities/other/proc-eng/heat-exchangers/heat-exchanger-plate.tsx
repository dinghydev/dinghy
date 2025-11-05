import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEAT_EXCHANGER_PLATE = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.heat_exchanger_(plate);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 30,
}

export function HeatExchangerPlate(props: NodeProps) {
  return (
    <Shape
      {...HEAT_EXCHANGER_PLATE}
      {...props}
      _style={extendStyle(HEAT_EXCHANGER_PLATE, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELECTRIC_HEATER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.electric_heater;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 140,
  _height: 100,
}

export function ElectricHeater(props: NodeProps) {
  return (
    <Shape
      {...ELECTRIC_HEATER}
      {...props}
      _style={extendStyle(ELECTRIC_HEATER, props)}
    />
  )
}

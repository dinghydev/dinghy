import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELECTRIC_HEATER = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.electric_heater;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 140,
  _original_height: 100,
}

export function ElectricHeater(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTRIC_HEATER}
      {...props}
      _style={extendStyle(ELECTRIC_HEATER, props)}
    />
  )
}

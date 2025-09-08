import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HIGH_VOLTAGE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.high_voltage_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 40,
  _original_height: 99,
}

export function HighVoltage2(props: DiagramNodeProps) {
  return (
    <Shape
      {...HIGH_VOLTAGE_2}
      {...props}
      _style={extendStyle(HIGH_VOLTAGE_2, props)}
    />
  )
}

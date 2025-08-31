import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HIGH_VOLTAGE_3 = {
  _style:
    'shape=mxgraph.signs.safety.high_voltage_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 88,
}

export function HighVoltage3(props: DiagramNodeProps) {
  return (
    <Shape
      {...HIGH_VOLTAGE_3}
      {...props}
      _style={extendStyle(HIGH_VOLTAGE_3, props)}
    />
  )
}

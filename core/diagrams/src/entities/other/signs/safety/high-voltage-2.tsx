import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HIGH_VOLTAGE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.high_voltage_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 40,
  _height: 99,
}

export function HighVoltage2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HIGH_VOLTAGE_2)} />
}

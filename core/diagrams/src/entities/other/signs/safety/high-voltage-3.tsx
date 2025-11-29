import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HIGH_VOLTAGE_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.high_voltage_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 88,
}

export function HighVoltage3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HIGH_VOLTAGE_3)} />
}

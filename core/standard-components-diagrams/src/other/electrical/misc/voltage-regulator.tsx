import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOLTAGE_REGULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.voltage_regulator;',
  },
  _original_width: 70,
  _original_height: 58,
}

export function VoltageRegulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOLTAGE_REGULATOR}
      {...props}
      _style={extendStyle(VOLTAGE_REGULATOR, props)}
    />
  )
}

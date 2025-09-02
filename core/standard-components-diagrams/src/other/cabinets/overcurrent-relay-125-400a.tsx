import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OVERCURRENT_RELAY_125_400A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.overcurrent_relay_125_400a;',
  },
  _original_width: 55.00000000000001,
  _original_height: 30,
}

export function OvercurrentRelay125400a(props: DiagramNodeProps) {
  return (
    <Shape
      {...OVERCURRENT_RELAY_125_400A}
      {...props}
      _style={extendStyle(OVERCURRENT_RELAY_125_400A, props)}
    />
  )
}

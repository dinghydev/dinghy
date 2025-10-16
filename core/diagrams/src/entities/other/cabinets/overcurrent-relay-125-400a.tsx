import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OVERCURRENT_RELAY_125_400A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.overcurrent_relay_125_400a;',
  },
  _width: 55.00000000000001,
  _height: 30,
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

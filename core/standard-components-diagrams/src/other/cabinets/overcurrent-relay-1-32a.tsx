import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OVERCURRENT_RELAY_1_32A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.overcurrent_relay_1_32a;',
  },
  _width: 27,
  _height: 15,
}

export function OvercurrentRelay132a(props: DiagramNodeProps) {
  return (
    <Shape
      {...OVERCURRENT_RELAY_1_32A}
      {...props}
      _style={extendStyle(OVERCURRENT_RELAY_1_32A, props)}
    />
  )
}

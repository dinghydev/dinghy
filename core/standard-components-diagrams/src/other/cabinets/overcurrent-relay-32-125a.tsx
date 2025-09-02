import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OVERCURRENT_RELAY_32_125A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.overcurrent_relay_32_125a;',
  },
  _original_width: 30,
  _original_height: 16.5,
}

export function OvercurrentRelay32125a(props: DiagramNodeProps) {
  return (
    <Shape
      {...OVERCURRENT_RELAY_32_125A}
      {...props}
      _style={extendStyle(OVERCURRENT_RELAY_32_125A, props)}
    />
  )
}

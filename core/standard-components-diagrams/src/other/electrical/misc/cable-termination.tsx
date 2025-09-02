import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CABLE_TERMINATION = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.cable_termination',
  },
  _original_width: 100,
  _original_height: 50,
}

export function CableTermination(props: DiagramNodeProps) {
  return (
    <Shape
      {...CABLE_TERMINATION}
      {...props}
      _style={extendStyle(CABLE_TERMINATION, props)}
    />
  )
}

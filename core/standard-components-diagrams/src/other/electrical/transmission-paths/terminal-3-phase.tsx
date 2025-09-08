import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL_3_PHASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.terminal_3_phase;pointerEvents=1;',
  },
  _original_width: 43,
  _original_height: 10,
}

export function Terminal3Phase(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_3_PHASE}
      {...props}
      _style={extendStyle(TERMINAL_3_PHASE, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SIGNAL_IN_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.signal-in_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 30,
}

export function SignalInArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNAL_IN_ARROW}
      {...props}
      _style={extendStyle(SIGNAL_IN_ARROW, props)}
    />
  )
}

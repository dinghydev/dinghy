import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTCHED_SIGNAL_IN_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.notched_signal-in_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 96,
  _original_height: 30,
}

export function NotchedSignalInArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTCHED_SIGNAL_IN_ARROW}
      {...props}
      _style={extendStyle(NOTCHED_SIGNAL_IN_ARROW, props)}
    />
  )
}

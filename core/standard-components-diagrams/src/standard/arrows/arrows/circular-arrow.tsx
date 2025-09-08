import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.circular_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 69,
}

export function CircularArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_ARROW}
      {...props}
      _style={extendStyle(CIRCULAR_ARROW, props)}
    />
  )
}

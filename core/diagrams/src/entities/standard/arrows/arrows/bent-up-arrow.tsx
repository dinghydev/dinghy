import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BENT_UP_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.bent_up_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 83,
}

export function BentUpArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...BENT_UP_ARROW}
      {...props}
      _style={extendStyle(BENT_UP_ARROW, props)}
    />
  )
}

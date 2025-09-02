import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BENT_LEFT_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.bent_left_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 97,
}

export function BentLeftArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...BENT_LEFT_ARROW}
      {...props}
      _style={extendStyle(BENT_LEFT_ARROW, props)}
    />
  )
}

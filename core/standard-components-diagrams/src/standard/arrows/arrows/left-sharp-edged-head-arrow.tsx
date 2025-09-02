import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEFT_SHARP_EDGED_HEAD_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.left_sharp_edged_head_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 60,
}

export function LeftSharpEdgedHeadArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...LEFT_SHARP_EDGED_HEAD_ARROW}
      {...props}
      _style={extendStyle(LEFT_SHARP_EDGED_HEAD_ARROW, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_RIGHT = {
  _style: {
    entity:
      'shape=mxgraph.arrows.arrow_right;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 70,
}

export function ArrowRight(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_RIGHT}
      {...props}
      _style={extendStyle(ARROW_RIGHT, props)}
    />
  )
}

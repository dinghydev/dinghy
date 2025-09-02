import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STRIPED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.striped_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 70,
}

export function StripedArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...STRIPED_ARROW}
      {...props}
      _style={extendStyle(STRIPED_ARROW, props)}
    />
  )
}

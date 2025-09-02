import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARP_EDGED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.sharp_edged_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 60,
}

export function SharpEdgedArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARP_EDGED_ARROW}
      {...props}
      _style={extendStyle(SHARP_EDGED_ARROW, props)}
    />
  )
}

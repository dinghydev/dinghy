import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUAD_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.quadArrow;dy=10;dx=20;notch=24;arrowHead=10;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function QuadArrow(props: DiagramNodeProps) {
  return (
    <Shape {...QUAD_ARROW} {...props} _style={extendStyle(QUAD_ARROW, props)} />
  )
}

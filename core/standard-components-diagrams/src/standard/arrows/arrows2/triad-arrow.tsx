import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIAD_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.triadArrow;dy=10;dx=20;arrowHead=40;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function TriadArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIAD_ARROW}
      {...props}
      _style={extendStyle(TRIAD_ARROW, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTCHED_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;notch=15;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function NotchedArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTCHED_ARROW}
      {...props}
      _style={extendStyle(NOTCHED_ARROW, props)}
    />
  )
}

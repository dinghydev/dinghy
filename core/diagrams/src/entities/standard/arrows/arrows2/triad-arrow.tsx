import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIAD_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.triadArrow;dy=10;dx=20;arrowHead=40;',
  },
  _width: 100,
  _height: 70,
}

export function TriadArrow(props: NodeProps) {
  return (
    <Shape
      {...TRIAD_ARROW}
      {...props}
      _style={extendStyle(TRIAD_ARROW, props)}
    />
  )
}

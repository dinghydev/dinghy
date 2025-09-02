import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWO_WAY_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.twoWayArrow;dy=0.6;dx=35;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function TwoWayArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...TWO_WAY_ARROW}
      {...props}
      _style={extendStyle(TWO_WAY_ARROW, props)}
    />
  )
}

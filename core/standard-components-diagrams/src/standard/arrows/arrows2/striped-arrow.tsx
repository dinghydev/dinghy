import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STRIPED_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.stripedArrow;dy=0.6;dx=40;notch=25;',
  },
  _original_width: 100,
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

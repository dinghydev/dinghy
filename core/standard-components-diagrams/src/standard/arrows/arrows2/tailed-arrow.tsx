import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAILED_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.tailedArrow;dy1=10;dx1=20;notch=0;arrowHead=20;dx2=25;dy2=30;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function TailedArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAILED_ARROW}
      {...props}
      _style={extendStyle(TAILED_ARROW, props)}
    />
  )
}

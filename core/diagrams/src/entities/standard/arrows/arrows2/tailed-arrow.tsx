import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAILED_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.tailedArrow;dy1=10;dx1=20;notch=0;arrowHead=20;dx2=25;dy2=30;',
  },
  _width: 100,
  _height: 60,
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

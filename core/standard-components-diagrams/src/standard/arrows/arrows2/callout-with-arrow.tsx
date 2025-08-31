import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALLOUT_WITH_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.calloutArrow;dy=10;dx=20;notch=60;arrowHead=10;',
  _width: 100,
  _height: 60,
}

export function CalloutWithArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALLOUT_WITH_ARROW}
      {...props}
      _style={extendStyle(CALLOUT_WITH_ARROW, props)}
    />
  )
}

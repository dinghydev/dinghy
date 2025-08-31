import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALLOUT_WITH_DOUBLE_ARROW_90 = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.calloutDouble90Arrow;dy1=10;dx1=20;dx2=70;dy2=70;arrowHead=10;',
  _width: 60,
  _height: 60,
}

export function CalloutWithDoubleArrow90(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALLOUT_WITH_DOUBLE_ARROW_90}
      {...props}
      _style={extendStyle(CALLOUT_WITH_DOUBLE_ARROW_90, props)}
    />
  )
}

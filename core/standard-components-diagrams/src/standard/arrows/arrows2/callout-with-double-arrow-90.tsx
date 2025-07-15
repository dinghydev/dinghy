import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALLOUT_WITH_DOUBLE_ARROW_90 = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.calloutDouble90Arrow;dy1=10;dx1=20;dx2=70;dy2=70;arrowHead=10;',
  _width: 100,
  _height: 100,
}

export function CalloutWithDoubleArrow90(props: DiagramNodeProps) {
  return <Shape {...CALLOUT_WITH_DOUBLE_ARROW_90} {...props} />
}

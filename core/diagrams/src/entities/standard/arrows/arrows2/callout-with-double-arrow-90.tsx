import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALLOUT_WITH_DOUBLE_ARROW_90 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.calloutDouble90Arrow;dy1=10;dx1=20;dx2=70;dy2=70;arrowHead=10;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function CalloutWithDoubleArrow90(props: NodeProps) {
  return (
    <Shape
      {...CALLOUT_WITH_DOUBLE_ARROW_90}
      {...props}
      _style={extendStyle(CALLOUT_WITH_DOUBLE_ARROW_90, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALLOUT_WITH_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.calloutArrow;dy=10;dx=20;notch=60;arrowHead=10;',
  },
  _width: 100,
  _height: 60,
}

export function CalloutWithArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALLOUT_WITH_ARROW)} />
}

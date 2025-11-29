import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TWO_WAY_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.twoWayArrow;dy=0.6;dx=35;',
  },
  _width: 100,
  _height: 60,
}

export function TwoWayArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TWO_WAY_ARROW)} />
}

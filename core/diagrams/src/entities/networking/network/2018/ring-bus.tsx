import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RING_BUS = {
  _style: {
    entity:
      'html=1;fillColor=#CCCCCC;strokeColor=#6881B3;shape=ellipse;perimeter=ellipsePerimeter;gradientColor=none;gradientDirection=north;fontColor=#ffffff;strokeWidth=2;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function RingBus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RING_BUS)} />
}

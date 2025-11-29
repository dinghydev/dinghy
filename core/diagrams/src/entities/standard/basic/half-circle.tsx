import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HALF_CIRCLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.half_circle',
  },
  _width: 100,
  _height: 50,
}

export function HalfCircle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HALF_CIRCLE)} />
}

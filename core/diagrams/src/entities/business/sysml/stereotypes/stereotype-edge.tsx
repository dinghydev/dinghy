import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEREOTYPE_EDGE = {
  _style: {
    entity:
      'endArrow=none;html=1;edgeStyle=none;labelBackgroundColor=none;align=left;fontStyle=1;fontSize=10;',
  },
  _width: 2,
  _height: 180,
}

export function StereotypeEdge(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STEREOTYPE_EDGE)} />
}

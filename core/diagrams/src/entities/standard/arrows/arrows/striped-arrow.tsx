import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STRIPED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.striped_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 70,
}

export function StripedArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STRIPED_ARROW)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_LEFT = {
  _style: {
    entity:
      'shape=mxgraph.arrows.arrow_left;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 97,
  _height: 70,
}

export function ArrowLeft(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARROW_LEFT)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PYRAMID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedPyramid;fillColor=#10739E;strokeColor=none;',
  },
  _width: 60,
  _height: 100,
}

export function Pyramid(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PYRAMID)} />
}

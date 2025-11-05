import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORTHOGONAL_TRIANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.orthogonal_triangle',
  },
  _width: 100,
  _height: 70,
}

export function OrthogonalTriangle(props: NodeProps) {
  return (
    <Shape
      {...ORTHOGONAL_TRIANGLE}
      {...props}
      _style={extendStyle(ORTHOGONAL_TRIANGLE, props)}
    />
  )
}

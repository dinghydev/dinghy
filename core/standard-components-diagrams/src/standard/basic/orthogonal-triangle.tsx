import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORTHOGONAL_TRIANGLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.orthogonal_triangle',
  _width: 100,
  _height: 70,
}

export function OrthogonalTriangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORTHOGONAL_TRIANGLE}
      {...props}
      _style={extendStyle(ORTHOGONAL_TRIANGLE, props)}
    />
  )
}

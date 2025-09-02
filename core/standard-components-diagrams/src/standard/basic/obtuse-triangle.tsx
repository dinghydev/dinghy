import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBTUSE_TRIANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.obtuse_triangle;dx=0.25;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function ObtuseTriangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBTUSE_TRIANGLE}
      {...props}
      _style={extendStyle(OBTUSE_TRIANGLE, props)}
    />
  )
}

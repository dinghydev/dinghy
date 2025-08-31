import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHAPE_GROUP = {
  _style: {
    group:
      'html=1;whiteSpace=wrap;container=1;recursiveResize=0;collapsible=0;',
  },
}

export function ShapeGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHAPE_GROUP}
      {...props}
      _style={extendStyle(SHAPE_GROUP, props)}
    />
  )
}

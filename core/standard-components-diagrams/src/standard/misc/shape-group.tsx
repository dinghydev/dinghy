import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHAPE_GROUP = {
  _style: {
    group:
      'html=1;whiteSpace=wrap;container=1;recursiveResize=0;collapsible=0;',
  },
}

export function ShapeGroup(props: DiagramNodeProps) {
  return <Shape {...SHAPE_GROUP} {...props} />
}

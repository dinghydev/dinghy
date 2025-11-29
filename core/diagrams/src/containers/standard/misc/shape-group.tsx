import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHAPE_GROUP = {
  _style: {
    container:
      'html=1;whiteSpace=wrap;container=1;recursiveResize=0;collapsible=0;',
  },
}

export function ShapeGroup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHAPE_GROUP)} />
}

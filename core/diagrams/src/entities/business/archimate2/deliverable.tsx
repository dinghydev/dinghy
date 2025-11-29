import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DELIVERABLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffe0e0;shape=mxgraph.archimate.representation',
  },
  _width: 100,
  _height: 75,
}

export function Deliverable(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DELIVERABLE)} />
}

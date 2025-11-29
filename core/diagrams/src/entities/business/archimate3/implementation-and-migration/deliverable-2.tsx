import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DELIVERABLE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.deliverable;',
  },
  _width: 60,
  _height: 35,
}

export function Deliverable2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DELIVERABLE_2)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PART_ASSOCIATION = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=open;endSize=12;edgeStyle=orthogonalEdgeStyle;startFill=1;startSize=12;startArrow=diamondThin;',
  },
  _width: 250,
  _height: 0,
}

export function PartAssociation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PART_ASSOCIATION)} />
}

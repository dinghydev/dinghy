import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REFERENCE_ASSOCIATION = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;',
  },
  _width: 250,
  _height: 0,
}

export function ReferenceAssociation(props: NodeProps) {
  return (
    <Shape
      {...REFERENCE_ASSOCIATION}
      {...props}
      _style={extendStyle(REFERENCE_ASSOCIATION, props)}
    />
  )
}

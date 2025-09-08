import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REFERENCE_ASSOCIATION = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;',
  },
  _original_width: 250,
  _original_height: 0,
}

export function ReferenceAssociation(props: DiagramNodeProps) {
  return (
    <Shape
      {...REFERENCE_ASSOCIATION}
      {...props}
      _style={extendStyle(REFERENCE_ASSOCIATION, props)}
    />
  )
}

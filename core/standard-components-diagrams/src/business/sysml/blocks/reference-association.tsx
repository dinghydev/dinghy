import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REFERENCE_ASSOCIATION = {
  _style:
    'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;',
  _width: 250,
  _height: 0,
}

export function ReferenceAssociation(props: DiagramNodeProps) {
  return <Shape {...REFERENCE_ASSOCIATION} {...props} />
}

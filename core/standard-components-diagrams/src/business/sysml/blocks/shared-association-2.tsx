import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_ASSOCIATION_2 = {
  _style:
    'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;startFill=0;startSize=12;startArrow=diamondThin;',
  _width: 250,
  _height: 0,
}

export function SharedAssociation2(props: DiagramNodeProps) {
  return <Shape {...SHARED_ASSOCIATION_2} {...props} />
}

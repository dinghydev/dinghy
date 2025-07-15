import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_ASSOCIATION = {
  _style:
    'verticalAlign=bottom;html=1;endArrow=open;endSize=12;edgeStyle=orthogonalEdgeStyle;startFill=0;startSize=12;startArrow=diamondThin;',
  _width: 250,
  _height: 0,
}

export function SharedAssociation(props: DiagramNodeProps) {
  return <Shape {...SHARED_ASSOCIATION} {...props} />
}

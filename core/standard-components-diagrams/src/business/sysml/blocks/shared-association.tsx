import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED_ASSOCIATION = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=open;endSize=12;edgeStyle=orthogonalEdgeStyle;startFill=0;startSize=12;startArrow=diamondThin;',
  },
  _original_width: 250,
  _original_height: 0,
}

export function SharedAssociation(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_ASSOCIATION}
      {...props}
      _style={extendStyle(SHARED_ASSOCIATION, props)}
    />
  )
}

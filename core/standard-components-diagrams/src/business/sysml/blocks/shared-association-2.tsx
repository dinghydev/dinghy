import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARED_ASSOCIATION_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;startFill=0;startSize=12;startArrow=diamondThin;',
  },
  _original_width: 250,
  _original_height: 0,
}

export function SharedAssociation2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_ASSOCIATION_2}
      {...props}
      _style={extendStyle(SHARED_ASSOCIATION_2, props)}
    />
  )
}

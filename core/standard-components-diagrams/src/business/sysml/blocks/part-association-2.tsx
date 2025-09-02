import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PART_ASSOCIATION_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;startFill=1;startSize=12;startArrow=diamondThin;',
  },
  _original_width: 250,
  _original_height: 0,
}

export function PartAssociation2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PART_ASSOCIATION_2}
      {...props}
      _style={extendStyle(PART_ASSOCIATION_2, props)}
    />
  )
}

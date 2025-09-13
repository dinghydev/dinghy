import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PART_ASSOCIATION_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;startFill=1;startSize=12;startArrow=diamondThin;',
  },
  _width: 250,
  _height: 0,
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

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PART_ASSOCIATION = {
  _style:
    'verticalAlign=bottom;html=1;endArrow=open;endSize=12;edgeStyle=orthogonalEdgeStyle;startFill=1;startSize=12;startArrow=diamondThin;',
  _width: 250,
  _height: 0,
}

export function PartAssociation(props: DiagramNodeProps) {
  return (
    <Shape
      {...PART_ASSOCIATION}
      {...props}
      _style={extendStyle(PART_ASSOCIATION, props)}
    />
  )
}

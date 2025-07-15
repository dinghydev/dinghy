import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POINT_OF_INTEREST = {
  _style:
    'shape=mxgraph.signs.travel.point_of_interest;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 99,
}

export function PointOfInterest(props: DiagramNodeProps) {
  return <Shape {...POINT_OF_INTEREST} {...props} />
}

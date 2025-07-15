import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DASHED_WIRE = {
  _style:
    'shape=wire;edgeStyle=orthogonalEdgeStyle;orthogonalLoop=1;jettySize=auto;html=1;sourcePerimeterSpacing=0;targetPerimeterSpacing=0;endArrow=none;curved=0;rounded=0;strokeColor=#009900;dashed=1;fillColor=#ffff00;dashPattern=12 12;fixDash=1;startSize=6;endSize=6;',
  _width: 100,
  _height: 0,
}

export function DashedWire(props: DiagramNodeProps) {
  return <Dependency {...DASHED_WIRE} {...props} />
}

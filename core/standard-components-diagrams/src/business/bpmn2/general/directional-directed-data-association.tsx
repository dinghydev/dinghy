import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIRECTIONAL_DIRECTED_DATA_ASSOCIATION = {
  _style:
    'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endFill=0;startFill=0;endSize=6;startSize=6;dashed=1;dashPattern=1 4;endArrow=openThin;startArrow=none;',
  _width: 160,
  _height: 0,
}

export function DirectionalDirectedDataAssociation(props: DiagramNodeProps) {
  return <Dependency {...DIRECTIONAL_DIRECTED_DATA_ASSOCIATION} {...props} />
}

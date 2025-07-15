import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR_4 = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=none;rounded=0;startFill=0;dashed=1;',
  _width: 60,
  _height: 60,
}

export function DefaultRelationshipConnector4(props: DiagramNodeProps) {
  return <Dependency {...DEFAULT_RELATIONSHIP_CONNECTOR_4} {...props} />
}

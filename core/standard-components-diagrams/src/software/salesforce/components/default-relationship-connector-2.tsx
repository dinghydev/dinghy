import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR_2 = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=manyOptional;endFill=0;startArrow=none;rounded=0;startFill=0;dashed=1;',
  _width: 60,
  _height: 60,
}

export function DefaultRelationshipConnector2(props: DiagramNodeProps) {
  return <Dependency {...DEFAULT_RELATIONSHIP_CONNECTOR_2} {...props} />
}

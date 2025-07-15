import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=manyOptional;endFill=1;startArrow=none;rounded=0;startFill=0;',
  _width: 60,
  _height: 60,
}

export function DefaultRelationshipConnector(props: DiagramNodeProps) {
  return <Dependency {...DEFAULT_RELATIONSHIP_CONNECTOR} {...props} />
}

import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR_2 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=manyOptional;endFill=0;startArrow=none;rounded=0;startFill=0;dashed=1;',
  },
}

export function DefaultRelationshipConnector2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DEFAULT_RELATIONSHIP_CONNECTOR_2}
      {...props}
      _style={extendStyle(DEFAULT_RELATIONSHIP_CONNECTOR_2, props)}
    />
  )
}

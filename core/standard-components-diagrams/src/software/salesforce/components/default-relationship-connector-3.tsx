import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR_3 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=none;rounded=0;startFill=0;',
  },
}

export function DefaultRelationshipConnector3(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DEFAULT_RELATIONSHIP_CONNECTOR_3}
      {...props}
      _style={extendStyle(DEFAULT_RELATIONSHIP_CONNECTOR_3, props)}
    />
  )
}

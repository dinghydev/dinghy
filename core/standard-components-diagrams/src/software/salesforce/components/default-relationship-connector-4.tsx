import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR_4 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=none;rounded=0;startFill=0;dashed=1;',
  },
}

export function DefaultRelationshipConnector4(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DEFAULT_RELATIONSHIP_CONNECTOR_4}
      {...props}
      _style={extendStyle(DEFAULT_RELATIONSHIP_CONNECTOR_4, props)}
    />
  )
}

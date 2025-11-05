import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR_4 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;startArrow=none;rounded=0;startFill=0;dashed=1;',
  },
}

export function DefaultRelationshipConnector4(props: NodeProps) {
  return (
    <Dependency
      {...DEFAULT_RELATIONSHIP_CONNECTOR_4}
      {...props}
      _style={extendStyle(DEFAULT_RELATIONSHIP_CONNECTOR_4, props)}
    />
  )
}

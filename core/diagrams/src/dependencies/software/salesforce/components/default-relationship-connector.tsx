import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFAULT_RELATIONSHIP_CONNECTOR = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=manyOptional;endFill=1;startArrow=none;rounded=0;startFill=0;',
  },
}

export function DefaultRelationshipConnector(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, DEFAULT_RELATIONSHIP_CONNECTOR)}
    />
  )
}

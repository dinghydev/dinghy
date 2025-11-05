import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;',
  },
}

export function Component1Mandatory(props: NodeProps) {
  return (
    <Dependency
      {...COMPONENT_1_MANDATORY}
      {...props}
      _style={extendStyle(COMPONENT_1_MANDATORY, props)}
    />
  )
}

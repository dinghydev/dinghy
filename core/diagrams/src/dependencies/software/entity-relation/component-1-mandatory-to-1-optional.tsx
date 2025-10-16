import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_1_MANDATORY_TO_1_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToOne;startArrow=ERmandOne;',
  },
}

export function Component1MandatoryTo1Optional(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_1_MANDATORY_TO_1_OPTIONAL}
      {...props}
      _style={extendStyle(COMPONENT_1_MANDATORY_TO_1_OPTIONAL, props)}
    />
  )
}

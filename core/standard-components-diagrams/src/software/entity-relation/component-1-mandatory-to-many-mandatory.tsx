import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_1_MANDATORY_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERmandOne;',
  },
}

export function Component1MandatoryToManyMandatory(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_1_MANDATORY_TO_MANY_MANDATORY}
      {...props}
      _style={extendStyle(COMPONENT_1_MANDATORY_TO_MANY_MANDATORY, props)}
    />
  )
}

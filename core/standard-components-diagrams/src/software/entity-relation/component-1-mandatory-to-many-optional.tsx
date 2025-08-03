import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_MANDATORY_TO_MANY_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERmandOne;',
  },
}

export function Component1MandatoryToManyOptional(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_MANDATORY_TO_MANY_OPTIONAL} {...props} />
}

import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_MANDATORY_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERmandOne;',
  },
}

export function Component1MandatoryToManyMandatory(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_MANDATORY_TO_MANY_MANDATORY} {...props} />
}

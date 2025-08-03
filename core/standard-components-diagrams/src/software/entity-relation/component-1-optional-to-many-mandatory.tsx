import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_OPTIONAL_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERzeroToOne;',
  },
}

export function Component1OptionalToManyMandatory(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_OPTIONAL_TO_MANY_MANDATORY} {...props} />
}

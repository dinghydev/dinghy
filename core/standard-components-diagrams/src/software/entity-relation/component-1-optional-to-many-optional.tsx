import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_OPTIONAL_TO_MANY_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERzeroToOne;',
  },
}

export function Component1OptionalToManyOptional(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_OPTIONAL_TO_MANY_OPTIONAL} {...props} />
}

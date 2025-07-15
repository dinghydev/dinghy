import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_OPTIONAL_TO_MANY_MANDATORY = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERzeroToOne;',
  _width: 100,
  _height: 100,
}

export function Component1OptionalToManyMandatory(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_OPTIONAL_TO_MANY_MANDATORY} {...props} />
}

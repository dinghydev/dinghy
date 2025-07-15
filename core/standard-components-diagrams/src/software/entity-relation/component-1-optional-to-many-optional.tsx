import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_OPTIONAL_TO_MANY_OPTIONAL = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERzeroToOne;',
  _width: 100,
  _height: 100,
}

export function Component1OptionalToManyOptional(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_OPTIONAL_TO_MANY_OPTIONAL} {...props} />
}

import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_MANDATORY_TO_MANY_OPTIONAL = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;startArrow=ERmandOne;',
  _width: 100,
  _height: 100,
}

export function Component1MandatoryToManyOptional(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_MANDATORY_TO_MANY_OPTIONAL} {...props} />
}

import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_MANDATORY_TO_1_OPTIONAL = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToOne;startArrow=ERmandOne;',
  _width: 100,
  _height: 100,
}

export function Component1MandatoryTo1Optional(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_MANDATORY_TO_1_OPTIONAL} {...props} />
}

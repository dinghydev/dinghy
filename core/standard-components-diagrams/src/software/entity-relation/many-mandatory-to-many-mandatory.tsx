import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANY_MANDATORY_TO_MANY_MANDATORY = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERoneToMany;',
  _width: 100,
  _height: 100,
}

export function ManyMandatoryToManyMandatory(props: DiagramNodeProps) {
  return <Dependency {...MANY_MANDATORY_TO_MANY_MANDATORY} {...props} />
}

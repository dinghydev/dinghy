import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANY_OPTIONAL_TO_MANY_OPTIONAL = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;endFill=1;startArrow=ERzeroToMany;',
  _width: 100,
  _height: 100,
}

export function ManyOptionalToManyOptional(props: DiagramNodeProps) {
  return <Dependency {...MANY_OPTIONAL_TO_MANY_OPTIONAL} {...props} />
}

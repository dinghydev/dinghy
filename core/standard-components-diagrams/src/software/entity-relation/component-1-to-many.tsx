import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_TO_MANY = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;',
  _width: 100,
  _height: 100,
}

export function Component1ToMany(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_TO_MANY} {...props} />
}

import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1 = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERone;endFill=1;',
  _width: 100,
  _height: 100,
}

export function Component1(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1} {...props} />
}

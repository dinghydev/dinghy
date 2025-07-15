import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_0_TO_1 = {
  _style:
    'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToOne;endFill=1;',
  _width: 100,
  _height: 100,
}

export function Component0To1(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_0_TO_1} {...props} />
}

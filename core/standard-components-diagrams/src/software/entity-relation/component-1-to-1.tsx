import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_TO_1 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;startArrow=ERmandOne;',
  },
}

export function Component1To1(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_TO_1} {...props} />
}

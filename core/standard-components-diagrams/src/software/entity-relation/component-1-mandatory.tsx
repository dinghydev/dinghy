import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;',
  },
}

export function Component1Mandatory(props: DiagramNodeProps) {
  return <Dependency {...COMPONENT_1_MANDATORY} {...props} />
}

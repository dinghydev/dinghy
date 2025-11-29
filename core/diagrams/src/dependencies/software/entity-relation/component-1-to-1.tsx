import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1_TO_1 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;startArrow=ERmandOne;',
  },
}

export function Component1To1(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, COMPONENT_1_TO_1)} />
}

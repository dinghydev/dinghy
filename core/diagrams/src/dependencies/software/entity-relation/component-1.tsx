import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1 = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERone;endFill=1;',
  },
}

export function Component1(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, COMPONENT_1)} />
}

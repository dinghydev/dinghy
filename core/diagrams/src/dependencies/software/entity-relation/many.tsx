import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmany;',
  },
}

export function Many(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, MANY)} />
}

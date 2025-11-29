import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNIDIRECTIONAL_ASSOCIATION = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=bottom;',
  },
}

export function UnidirectionalAssociation(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, UNIDIRECTIONAL_ASSOCIATION)}
    />
  )
}

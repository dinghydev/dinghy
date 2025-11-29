import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INCLUDE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  },
}

export function Include(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, INCLUDE)} />
}

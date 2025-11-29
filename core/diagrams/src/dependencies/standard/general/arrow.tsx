import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW = {
  _style: {
    dependency: 'shape=flexArrow;endArrow=classic;html=1;',
  },
}

export function Arrow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, ARROW)} />
}

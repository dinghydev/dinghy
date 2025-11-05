import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIDIRECTIONAL_ARROW = {
  _style: {
    dependency: 'shape=flexArrow;endArrow=classic;startArrow=classic;html=1;',
  },
}

export function BidirectionalArrow(props: NodeProps) {
  return (
    <Dependency
      {...BIDIRECTIONAL_ARROW}
      {...props}
      _style={extendStyle(BIDIRECTIONAL_ARROW, props)}
    />
  )
}

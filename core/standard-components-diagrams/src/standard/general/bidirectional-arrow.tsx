import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIDIRECTIONAL_ARROW = {
  _style: {
    dependency: 'shape=flexArrow;endArrow=classic;startArrow=classic;html=1;',
  },
}

export function BidirectionalArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...BIDIRECTIONAL_ARROW}
      {...props}
      _style={extendStyle(BIDIRECTIONAL_ARROW, props)}
    />
  )
}

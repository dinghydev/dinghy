import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECTION_OF_FLOW = {
  _style: {
    dependency: 'endArrow=classicThin;html=1;strokeWidth=1;endSize=20;',
  },
}

export function DirectionOfFlow(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, DIRECTION_OF_FLOW)} />
  )
}

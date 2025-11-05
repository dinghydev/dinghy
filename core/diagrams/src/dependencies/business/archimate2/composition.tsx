import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPOSITION = {
  _style: {
    dependency:
      'endArrow=none;html=1;endFill=0;startArrow=diamondThin;startFill=1;edgeStyle=elbowEdgeStyle;elbow=vertical',
  },
}

export function Composition(props: NodeProps) {
  return (
    <Dependency
      {...COMPOSITION}
      {...props}
      _style={extendStyle(COMPOSITION, props)}
    />
  )
}

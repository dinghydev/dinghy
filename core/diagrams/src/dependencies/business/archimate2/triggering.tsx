import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIGGERING = {
  _style: {
    dependency:
      'endArrow=block;html=1;endFill=1;startArrow=none;startFill=0;edgeStyle=elbowEdgeStyle;elbow=vertical;dashed=0',
  },
}

export function Triggering(props: DiagramNodeProps) {
  return (
    <Dependency
      {...TRIGGERING}
      {...props}
      _style={extendStyle(TRIGGERING, props)}
    />
  )
}

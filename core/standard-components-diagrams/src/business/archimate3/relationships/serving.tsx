import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVING = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=open;elbow=vertical;endFill=1;',
  },
}

export function Serving(props: DiagramNodeProps) {
  return (
    <Dependency {...SERVING} {...props} _style={extendStyle(SERVING, props)} />
  )
}

import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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

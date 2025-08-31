import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSOCIATION = {
  _style: {
    dependency: 'edgeStyle=elbowEdgeStyle;html=1;endArrow=none;elbow=vertical',
  },
}

export function Association(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ASSOCIATION}
      {...props}
      _style={extendStyle(ASSOCIATION, props)}
    />
  )
}

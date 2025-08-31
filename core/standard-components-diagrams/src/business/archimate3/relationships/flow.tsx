import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;html=1;endArrow=block;dashed=1;elbow=vertical;endFill=1;dashPattern=6 4;',
  },
}

export function Flow(props: DiagramNodeProps) {
  return <Dependency {...FLOW} {...props} _style={extendStyle(FLOW, props)} />
}

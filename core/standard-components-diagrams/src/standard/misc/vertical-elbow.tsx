import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_ELBOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=classic;html=1;curved=0;rounded=0;endSize=8;startSize=8;',
  },
}

export function VerticalElbow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...VERTICAL_ELBOW}
      {...props}
      _style={extendStyle(VERTICAL_ELBOW, props)}
    />
  )
}

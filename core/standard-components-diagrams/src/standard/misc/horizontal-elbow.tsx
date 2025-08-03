import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_ELBOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;elbow=horizontal;endArrow=classic;html=1;curved=0;rounded=0;endSize=8;startSize=8;',
  },
}

export function HorizontalElbow(props: DiagramNodeProps) {
  return <Dependency {...HORIZONTAL_ELBOW} {...props} />
}

import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_ELBOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;elbow=horizontal;endArrow=classic;html=1;curved=0;rounded=0;endSize=8;startSize=8;',
  },
}

export function HorizontalElbow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, HORIZONTAL_ELBOW)} />
}

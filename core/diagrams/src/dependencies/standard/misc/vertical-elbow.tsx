import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_ELBOW = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;elbow=vertical;endArrow=classic;html=1;curved=0;rounded=0;endSize=8;startSize=8;',
  },
}

export function VerticalElbow(props: NodeProps) {
  return (
    <Dependency
      {...VERTICAL_ELBOW}
      {...props}
      _style={extendStyle(VERTICAL_ELBOW, props)}
    />
  )
}

import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUCCESS_STATUS = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;strokeColor=#34A853;dashed=0;',
  },
}

export function SuccessStatus(props: DiagramNodeProps) {
  return (
    <Dependency
      {...SUCCESS_STATUS}
      {...props}
      _style={extendStyle(SUCCESS_STATUS, props)}
    />
  )
}

import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BI_DIRECTIONAL_ASSOCIATION = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endFill=0;startFill=0;endSize=6;startSize=6;dashed=1;dashPattern=1 4;endArrow=openThin;startArrow=openThin;',
  },
}

export function BiDirectionalAssociation(props: DiagramNodeProps) {
  return (
    <Dependency
      {...BI_DIRECTIONAL_ASSOCIATION}
      {...props}
      _style={extendStyle(BI_DIRECTIONAL_ASSOCIATION, props)}
    />
  )
}

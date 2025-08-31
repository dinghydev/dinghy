import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECTIONAL_DIRECTED_DATA_ASSOCIATION = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endFill=0;startFill=0;endSize=6;startSize=6;dashed=1;dashPattern=1 4;endArrow=openThin;startArrow=none;',
  },
}

export function DirectionalDirectedDataAssociation(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DIRECTIONAL_DIRECTED_DATA_ASSOCIATION}
      {...props}
      _style={extendStyle(DIRECTIONAL_DIRECTED_DATA_ASSOCIATION, props)}
    />
  )
}

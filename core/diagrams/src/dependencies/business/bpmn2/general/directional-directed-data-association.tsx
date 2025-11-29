import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECTIONAL_DIRECTED_DATA_ASSOCIATION = {
  _style: {
    dependency:
      'edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endFill=0;startFill=0;endSize=6;startSize=6;dashed=1;dashPattern=1 4;endArrow=openThin;startArrow=none;',
  },
}

export function DirectionalDirectedDataAssociation(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, DIRECTIONAL_DIRECTED_DATA_ASSOCIATION)}
    />
  )
}

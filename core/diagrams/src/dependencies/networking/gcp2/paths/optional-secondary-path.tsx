import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPTIONAL_SECONDARY_PATH = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;dashed=1;dashPattern=1 3;strokeColor=#9E9E9E;',
  },
}

export function OptionalSecondaryPath(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, OPTIONAL_SECONDARY_PATH)}
    />
  )
}

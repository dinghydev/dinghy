import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECONDARY_PATH = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;dashed=0;strokeColor=#9E9E9E;',
  },
}

export function SecondaryPath(props: NodeProps) {
  return (
    <Dependency
      {...SECONDARY_PATH}
      {...props}
      _style={extendStyle(SECONDARY_PATH, props)}
    />
  )
}

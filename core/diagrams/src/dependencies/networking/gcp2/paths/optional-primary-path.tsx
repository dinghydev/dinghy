import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPTIONAL_PRIMARY_PATH = {
  _style: {
    dependency:
      'edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=blockThin;endFill=1;rounded=0;strokeWidth=2;endSize=4;startSize=4;dashed=1;dashPattern=1 3;strokeColor=#4284F3;',
  },
}

export function OptionalPrimaryPath(props: DiagramNodeProps) {
  return (
    <Dependency
      {...OPTIONAL_PRIMARY_PATH}
      {...props}
      _style={extendStyle(OPTIONAL_PRIMARY_PATH, props)}
    />
  )
}

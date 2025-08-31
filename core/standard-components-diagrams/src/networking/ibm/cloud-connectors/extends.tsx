import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTENDS = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;endFill=0;strokeWidth=1;',
  },
}

export function Extends(props: DiagramNodeProps) {
  return (
    <Dependency {...EXTENDS} {...props} _style={extendStyle(EXTENDS, props)} />
  )
}

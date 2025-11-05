import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTENDS = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;endFill=0;strokeWidth=1;',
  },
}

export function Extends(props: NodeProps) {
  return (
    <Dependency {...EXTENDS} {...props} _style={extendStyle(EXTENDS, props)} />
  )
}

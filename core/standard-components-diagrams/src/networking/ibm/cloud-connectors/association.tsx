import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSOCIATION = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=open;strokeWidth=1;',
  },
}

export function Association(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ASSOCIATION}
      {...props}
      _style={extendStyle(ASSOCIATION, props)}
    />
  )
}

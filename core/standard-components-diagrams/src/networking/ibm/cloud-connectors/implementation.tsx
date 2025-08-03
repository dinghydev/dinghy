import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMPLEMENTATION = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;endFill=0;dashed=1;strokeWidth=1;',
  },
}

export function Implementation(props: DiagramNodeProps) {
  return <Dependency {...IMPLEMENTATION} {...props} />
}

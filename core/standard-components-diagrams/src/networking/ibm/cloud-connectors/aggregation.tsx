import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGGREGATION = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=diamond;startFill=0;endArrow=open;strokeWidth=1;',
  _width: 48,
  _height: 48,
}

export function Aggregation(props: DiagramNodeProps) {
  return <Dependency {...AGGREGATION} {...props} />
}

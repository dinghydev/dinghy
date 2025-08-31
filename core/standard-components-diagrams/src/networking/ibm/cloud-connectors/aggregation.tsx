import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGGREGATION = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=diamond;startFill=0;endArrow=open;strokeWidth=1;',
  },
}

export function Aggregation(props: DiagramNodeProps) {
  return (
    <Dependency
      {...AGGREGATION}
      {...props}
      _style={extendStyle(AGGREGATION, props)}
    />
  )
}

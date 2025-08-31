import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;strokeWidth=2;endFill=0;',
  },
}

export function Connector(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR}
      {...props}
      _style={extendStyle(CONNECTOR, props)}
    />
  )
}

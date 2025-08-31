import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGICAL_CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;strokeWidth=2;dashed=1;',
  },
}

export function LogicalConnector(props: DiagramNodeProps) {
  return (
    <Dependency
      {...LOGICAL_CONNECTOR}
      {...props}
      _style={extendStyle(LOGICAL_CONNECTOR, props)}
    />
  )
}

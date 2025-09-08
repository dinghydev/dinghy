import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNECTOR_ARROW_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=block;endArrow=block;strokeWidth=2;startFill=1;endFill=1;',
  },
}

export function ConnectorArrowArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR_ARROW_ARROW}
      {...props}
      _style={extendStyle(CONNECTOR_ARROW_ARROW, props)}
    />
  )
}

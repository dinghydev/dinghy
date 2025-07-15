import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTOR_ARROW = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;strokeWidth=2;endFill=1;',
  _width: 48,
  _height: 48,
}

export function ConnectorArrow(props: DiagramNodeProps) {
  return <Dependency {...CONNECTOR_ARROW} {...props} />
}

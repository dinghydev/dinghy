import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGICAL_CONNECTOR_ARROW = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=block;endFill=1;strokeWidth=2;dashed=1;',
  _width: 48,
  _height: 48,
}

export function LogicalConnectorArrow(props: DiagramNodeProps) {
  return <Dependency {...LOGICAL_CONNECTOR_ARROW} {...props} />
}

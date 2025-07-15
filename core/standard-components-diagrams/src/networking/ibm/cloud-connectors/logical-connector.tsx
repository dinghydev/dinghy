import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGICAL_CONNECTOR = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;strokeWidth=2;dashed=1;',
  _width: 48,
  _height: 48,
}

export function LogicalConnector(props: DiagramNodeProps) {
  return <Dependency {...LOGICAL_CONNECTOR} {...props} />
}

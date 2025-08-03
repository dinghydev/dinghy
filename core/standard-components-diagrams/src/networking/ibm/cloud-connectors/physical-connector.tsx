import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;fontSize=14;rounded=0;jumpStyle=gap;edgeStyle=orthogonalEdgeStyle;shape=link;startArrow=none;endArrow=none;strokeWidth=2;',
  },
}

export function PhysicalConnector(props: DiagramNodeProps) {
  return <Dependency {...PHYSICAL_CONNECTOR} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PORT_CONJUGATED_PORTS = {
  _style:
    'html=1;shape=mxgraph.sysml.port2;fontStyle=1;spacingRight=20;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 60,
}

export function PortConjugatedPorts(props: DiagramNodeProps) {
  return <Shape {...PORT_CONJUGATED_PORTS} {...props} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PORT_CONJUGATED_PORTS = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.port2;fontStyle=1;spacingRight=20;whiteSpace=wrap;align=center;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function PortConjugatedPorts(props: DiagramNodeProps) {
  return (
    <Shape
      {...PORT_CONJUGATED_PORTS}
      {...props}
      _style={extendStyle(PORT_CONJUGATED_PORTS, props)}
    />
  )
}

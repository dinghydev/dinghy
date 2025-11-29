import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PORT_CONJUGATED_PORTS = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.port2;fontStyle=1;spacingRight=20;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function PortConjugatedPorts(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PORT_CONJUGATED_PORTS)} />
}

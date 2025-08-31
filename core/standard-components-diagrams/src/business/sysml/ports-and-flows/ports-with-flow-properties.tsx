import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORTS_WITH_FLOW_PROPERTIES = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.port3;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function PortsWithFlowProperties(props: DiagramNodeProps) {
  return (
    <Shape
      {...PORTS_WITH_FLOW_PROPERTIES}
      {...props}
      _style={extendStyle(PORTS_WITH_FLOW_PROPERTIES, props)}
    />
  )
}

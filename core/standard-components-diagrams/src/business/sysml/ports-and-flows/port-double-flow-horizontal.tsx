import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PORT_DOUBLE_FLOW_HORIZONTAL = {
  _style: 'html=1;shape=mxgraph.sysml.port;sysMLPortType=doubleH;',
  _width: 20,
  _height: 20,
}

export function PortDoubleFlowHorizontal(props: DiagramNodeProps) {
  return (
    <Shape
      {...PORT_DOUBLE_FLOW_HORIZONTAL}
      {...props}
      _style={extendStyle(PORT_DOUBLE_FLOW_HORIZONTAL, props)}
    />
  )
}

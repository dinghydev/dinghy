import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PORT_DOUBLE_FLOW_HORIZONTAL = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.port;sysMLPortType=doubleH;',
  },
  _original_width: 20,
  _original_height: 20,
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

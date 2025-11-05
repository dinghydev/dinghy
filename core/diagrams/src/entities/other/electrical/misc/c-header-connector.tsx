import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const C_HEADER_CONNECTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.c_header_connector',
  },
  _width: 200,
  _height: 75,
}

export function CHeaderConnector(props: NodeProps) {
  return (
    <Shape
      {...C_HEADER_CONNECTOR}
      {...props}
      _style={extendStyle(C_HEADER_CONNECTOR, props)}
    />
  )
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const C_HEADER_CONNECTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.c_header_connector',
  _width: 200,
  _height: 75,
}

export function CHeaderConnector(props: DiagramNodeProps) {
  return <Shape {...C_HEADER_CONNECTOR} {...props} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LARGE_D_CONNECTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.large_d_connector',
  },
  _width: 375,
  _height: 75,
}

export function LargeDConnector(props: NodeProps) {
  return (
    <Shape
      {...LARGE_D_CONNECTOR}
      {...props}
      _style={extendStyle(LARGE_D_CONNECTOR, props)}
    />
  )
}

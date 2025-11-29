import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMALL_D_CONNECTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.small_d_connector',
  },
  _width: 150,
  _height: 75,
}

export function SmallDConnector(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SMALL_D_CONNECTOR)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESIDUAL_CURRENT_DEVICE_2P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.residual_current_device_2p;',
  },
  _width: 18,
  _height: 50,
}

export function ResidualCurrentDevice2p(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RESIDUAL_CURRENT_DEVICE_2P)} />
  )
}

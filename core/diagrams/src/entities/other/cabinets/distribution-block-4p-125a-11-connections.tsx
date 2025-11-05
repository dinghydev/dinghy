import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.distribution_block_4p_125a_11_connections;',
  },
  _width: 100,
  _height: 60,
}

export function DistributionBlock4p125a11Connections(props: NodeProps) {
  return (
    <Shape
      {...DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS}
      {...props}
      _style={extendStyle(DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS, props)}
    />
  )
}

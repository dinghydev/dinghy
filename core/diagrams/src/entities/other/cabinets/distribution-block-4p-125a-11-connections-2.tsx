import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.distribution_block_4p_125a_11_connections_2;',
  },
  _width: 100,
  _height: 50,
}

export function DistributionBlock4p125a11Connections2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS_2)}
    />
  )
}

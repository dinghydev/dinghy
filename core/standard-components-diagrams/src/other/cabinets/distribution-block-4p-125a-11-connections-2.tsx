import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.distribution_block_4p_125a_11_connections_2;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function DistributionBlock4p125a11Connections2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS_2}
      {...props}
      _style={extendStyle(DISTRIBUTION_BLOCK_4P_125A_11_CONNECTIONS_2, props)}
    />
  )
}

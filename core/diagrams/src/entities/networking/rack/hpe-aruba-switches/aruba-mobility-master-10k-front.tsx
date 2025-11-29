import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARUBA_MOBILITY_MASTER_10K_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_mobility_master_10k_front;',
  },
  _width: 142,
  _height: 15,
}

export function ArubaMobilityMaster10kFront(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ARUBA_MOBILITY_MASTER_10K_FRONT)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARUBA_MOBILITY_MASTER_5K_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_mobility_master_5k_rear;',
  },
  _width: 142,
  _height: 15,
}

export function ArubaMobilityMaster5kRear(props: NodeProps) {
  return (
    <Shape
      {...ARUBA_MOBILITY_MASTER_5K_REAR}
      {...props}
      _style={extendStyle(ARUBA_MOBILITY_MASTER_5K_REAR, props)}
    />
  )
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_MOBILITY_MASTER_10K_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_mobility_master_10k_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function ArubaMobilityMaster10kRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_MOBILITY_MASTER_10K_REAR}
      {...props}
      _style={extendStyle(ARUBA_MOBILITY_MASTER_10K_REAR, props)}
    />
  )
}

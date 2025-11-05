import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARUBA_7030_MOBILITY_CONTROLLER_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7030_mobility_controller_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Aruba7030MobilityControllerRear(props: NodeProps) {
  return (
    <Shape
      {...ARUBA_7030_MOBILITY_CONTROLLER_REAR}
      {...props}
      _style={extendStyle(ARUBA_7030_MOBILITY_CONTROLLER_REAR, props)}
    />
  )
}

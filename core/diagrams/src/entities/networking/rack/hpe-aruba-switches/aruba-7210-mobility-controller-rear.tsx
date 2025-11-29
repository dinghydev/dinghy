import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARUBA_7210_MOBILITY_CONTROLLER_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7210_mobility_controller_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Aruba7210MobilityControllerRear(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ARUBA_7210_MOBILITY_CONTROLLER_REAR)}
    />
  )
}

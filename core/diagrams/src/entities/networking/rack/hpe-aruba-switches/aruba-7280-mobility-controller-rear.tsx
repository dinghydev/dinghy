import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARUBA_7280_MOBILITY_CONTROLLER_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7280_mobility_controller_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Aruba7280MobilityControllerRear(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ARUBA_7280_MOBILITY_CONTROLLER_REAR)}
    />
  )
}

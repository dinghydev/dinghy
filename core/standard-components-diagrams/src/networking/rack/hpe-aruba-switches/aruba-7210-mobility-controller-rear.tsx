import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_7210_MOBILITY_CONTROLLER_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7210_mobility_controller_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Aruba7210MobilityControllerRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_7210_MOBILITY_CONTROLLER_REAR}
      {...props}
      _style={extendStyle(ARUBA_7210_MOBILITY_CONTROLLER_REAR, props)}
    />
  )
}

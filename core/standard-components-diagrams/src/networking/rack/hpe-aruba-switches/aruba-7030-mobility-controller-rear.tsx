import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARUBA_7030_MOBILITY_CONTROLLER_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7030_mobility_controller_rear;',
  _width: 142,
  _height: 15,
}

export function Aruba7030MobilityControllerRear(props: DiagramNodeProps) {
  return <Shape {...ARUBA_7030_MOBILITY_CONTROLLER_REAR} {...props} />
}

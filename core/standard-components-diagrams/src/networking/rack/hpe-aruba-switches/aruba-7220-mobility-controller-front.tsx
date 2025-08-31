import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_7220_MOBILITY_CONTROLLER_FRONT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7220_mobility_controller_front;',
  _width: 142,
  _height: 15,
}

export function Aruba7220MobilityControllerFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_7220_MOBILITY_CONTROLLER_FRONT}
      {...props}
      _style={extendStyle(ARUBA_7220_MOBILITY_CONTROLLER_FRONT, props)}
    />
  )
}

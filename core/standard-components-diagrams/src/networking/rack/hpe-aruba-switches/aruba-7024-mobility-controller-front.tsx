import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARUBA_7024_MOBILITY_CONTROLLER_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7024_mobility_controller_front;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Aruba7024MobilityControllerFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_7024_MOBILITY_CONTROLLER_FRONT}
      {...props}
      _style={extendStyle(ARUBA_7024_MOBILITY_CONTROLLER_FRONT, props)}
    />
  )
}

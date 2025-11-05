import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARUBA_7024_MOBILITY_CONTROLLER_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_7024_mobility_controller_front;',
  },
  _width: 142,
  _height: 15,
}

export function Aruba7024MobilityControllerFront(props: NodeProps) {
  return (
    <Shape
      {...ARUBA_7024_MOBILITY_CONTROLLER_FRONT}
      {...props}
      _style={extendStyle(ARUBA_7024_MOBILITY_CONTROLLER_FRONT, props)}
    />
  )
}

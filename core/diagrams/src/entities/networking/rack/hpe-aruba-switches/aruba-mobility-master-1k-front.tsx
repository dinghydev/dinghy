import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARUBA_MOBILITY_MASTER_1K_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_mobility_master_1k_front;',
  },
  _width: 142,
  _height: 15,
}

export function ArubaMobilityMaster1kFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARUBA_MOBILITY_MASTER_1K_FRONT}
      {...props}
      _style={extendStyle(ARUBA_MOBILITY_MASTER_1K_FRONT, props)}
    />
  )
}

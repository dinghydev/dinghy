import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARUBA_MOBILITY_MASTER_10K_FRONT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.gateways_controllers.aruba_mobility_master_10k_front;',
  _width: 142,
  _height: 15,
}

export function ArubaMobilityMaster10kFront(props: DiagramNodeProps) {
  return <Shape {...ARUBA_MOBILITY_MASTER_10K_FRONT} {...props} />
}

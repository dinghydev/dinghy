import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HYBRID_VOIP_GATEWAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.hybrid_voip_gateway;',
  },
  _width: 59,
  _height: 38,
}

export function HybridVoipGateway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HYBRID_VOIP_GATEWAY)} />
}

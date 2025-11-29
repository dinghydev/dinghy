import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOIP_GATEWAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.voip_gateway;',
  },
  _width: 51,
  _height: 15,
}

export function VoipGateway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VOIP_GATEWAY)} />
}

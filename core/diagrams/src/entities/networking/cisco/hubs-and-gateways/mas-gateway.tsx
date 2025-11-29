import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAS_GATEWAY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.hubs_and_gateways.mas_gateway;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 58,
  _original_height: 59,
}

export function MasGateway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAS_GATEWAY)} />
}

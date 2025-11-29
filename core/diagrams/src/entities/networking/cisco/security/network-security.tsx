import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_SECURITY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.network_security;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 45,
  _original_height: 58,
}

export function NetworkSecurity(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORK_SECURITY)} />
}

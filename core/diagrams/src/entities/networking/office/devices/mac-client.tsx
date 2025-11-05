import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAC_CLIENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.mac_client;',
  },
  _original_width: 58,
  _original_height: 48,
}

export function MacClient(props: NodeProps) {
  return (
    <Shape {...MAC_CLIENT} {...props} _style={extendStyle(MAC_CLIENT, props)} />
  )
}

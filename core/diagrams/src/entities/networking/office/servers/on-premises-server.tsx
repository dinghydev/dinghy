import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ON_PREMISES_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.on_premises_server;',
  },
  _original_width: 44,
  _original_height: 58,
}

export function OnPremisesServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ON_PREMISES_SERVER)} />
}

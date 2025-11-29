import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTI_FABRIC_SERVER_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.multi-fabric_server_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 56,
  _original_height: 75,
}

export function MultiFabricServerSwitch(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MULTI_FABRIC_SERVER_SWITCH)} />
  )
}

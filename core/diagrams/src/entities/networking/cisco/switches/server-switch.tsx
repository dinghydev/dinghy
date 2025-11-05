import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.server_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 56,
  _original_height: 56,
}

export function ServerSwitch(props: NodeProps) {
  return (
    <Shape
      {...SERVER_SWITCH}
      {...props}
      _style={extendStyle(SERVER_SWITCH, props)}
    />
  )
}

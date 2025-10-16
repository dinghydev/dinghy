import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LAN_TO_LAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.lan_to_lan;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 61,
}

export function LanToLan(props: DiagramNodeProps) {
  return (
    <Shape {...LAN_TO_LAN} {...props} _style={extendStyle(LAN_TO_LAN, props)} />
  )
}

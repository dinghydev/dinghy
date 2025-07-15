import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAN_TO_LAN = {
  _style:
    'shape=mxgraph.cisco.misc.lan_to_lan;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 61,
  _height: 61,
}

export function LanToLan(props: DiagramNodeProps) {
  return <Shape {...LAN_TO_LAN} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.server_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 56,
  _height: 56,
}

export function ServerSwitch(props: DiagramNodeProps) {
  return <Shape {...SERVER_SWITCH} {...props} />
}

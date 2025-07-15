import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISDN_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.isdn_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 58,
  _height: 59,
}

export function IsdnSwitch(props: DiagramNodeProps) {
  return <Shape {...ISDN_SWITCH} {...props} />
}

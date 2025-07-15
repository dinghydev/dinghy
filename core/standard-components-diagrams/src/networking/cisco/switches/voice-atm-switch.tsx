import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VOICE_ATM_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.voice_atm_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 54,
  _height: 56,
}

export function VoiceAtmSwitch(props: DiagramNodeProps) {
  return <Shape {...VOICE_ATM_SWITCH} {...props} />
}

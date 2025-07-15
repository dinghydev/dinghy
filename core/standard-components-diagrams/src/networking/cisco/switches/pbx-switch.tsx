import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PBX_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.pbx_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 58,
  _height: 53,
}

export function PbxSwitch(props: DiagramNodeProps) {
  return <Shape {...PBX_SWITCH} {...props} />
}

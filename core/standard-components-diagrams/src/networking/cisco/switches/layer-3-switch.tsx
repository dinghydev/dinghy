import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAYER_3_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.layer_3_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 64,
  _height: 64,
}

export function Layer3Switch(props: DiagramNodeProps) {
  return <Shape {...LAYER_3_SWITCH} {...props} />
}

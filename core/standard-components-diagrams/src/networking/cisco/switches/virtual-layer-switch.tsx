import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_LAYER_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.virtual_layer_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 64,
  _height: 86,
}

export function VirtualLayerSwitch(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_LAYER_SWITCH} {...props} />
}

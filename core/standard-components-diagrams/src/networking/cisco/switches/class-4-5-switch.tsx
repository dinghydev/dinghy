import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLASS_4_5_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.class_4_5_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 69,
  _height: 90,
}

export function Class45Switch(props: DiagramNodeProps) {
  return <Shape {...CLASS_4_5_SWITCH} {...props} />
}

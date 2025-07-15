import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SET_TOP_BOX = {
  _style:
    'shape=mxgraph.cisco.misc.set_top_box;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 114,
  _height: 42,
}

export function SetTopBox(props: DiagramNodeProps) {
  return <Shape {...SET_TOP_BOX} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PAD_1 = {
  _style:
    'shape=mxgraph.cisco.misc.pad_1;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 88,
  _height: 70,
}

export function Pad1(props: DiagramNodeProps) {
  return <Shape {...PAD_1} {...props} />
}

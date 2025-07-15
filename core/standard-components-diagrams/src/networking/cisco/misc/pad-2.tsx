import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PAD_2 = {
  _style:
    'shape=mxgraph.cisco.misc.pad_2;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 85,
  _height: 48,
}

export function Pad2(props: DiagramNodeProps) {
  return <Shape {...PAD_2} {...props} />
}

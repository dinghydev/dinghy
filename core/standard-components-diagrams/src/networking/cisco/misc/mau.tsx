import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAU = {
  _style:
    'shape=mxgraph.cisco.misc.mau;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 82,
  _height: 26,
}

export function Mau(props: DiagramNodeProps) {
  return <Shape {...MAU} {...props} />
}

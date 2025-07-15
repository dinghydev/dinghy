import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VENUS = {
  _style:
    'shape=mxgraph.signs.nature.venus;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 65,
  _height: 98,
}

export function Venus(props: DiagramNodeProps) {
  return <Shape {...VENUS} {...props} />
}

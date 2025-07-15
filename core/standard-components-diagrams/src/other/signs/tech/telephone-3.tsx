import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TELEPHONE_3 = {
  _style:
    'shape=mxgraph.signs.tech.telephone_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 74,
  _height: 101,
}

export function Telephone3(props: DiagramNodeProps) {
  return <Shape {...TELEPHONE_3} {...props} />
}

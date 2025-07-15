import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TELEPHONE_4 = {
  _style:
    'shape=mxgraph.signs.tech.telephone_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 71,
  _height: 99,
}

export function Telephone4(props: DiagramNodeProps) {
  return <Shape {...TELEPHONE_4} {...props} />
}

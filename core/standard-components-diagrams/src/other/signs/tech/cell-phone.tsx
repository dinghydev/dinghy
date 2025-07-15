import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CELL_PHONE = {
  _style:
    'shape=mxgraph.signs.tech.cell_phone;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 47,
  _height: 98,
}

export function CellPhone(props: DiagramNodeProps) {
  return <Shape {...CELL_PHONE} {...props} />
}

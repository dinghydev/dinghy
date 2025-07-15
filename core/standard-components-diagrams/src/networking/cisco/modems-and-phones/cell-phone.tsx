import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CELL_PHONE = {
  _style:
    'shape=mxgraph.cisco.modems_and_phones.cell_phone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 34,
  _height: 58,
}

export function CellPhone(props: DiagramNodeProps) {
  return <Shape {...CELL_PHONE} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PICNIC_TABLE_2 = {
  _style:
    'shape=mxgraph.signs.sports.picnic_table_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 87,
}

export function PicnicTable2(props: DiagramNodeProps) {
  return <Shape {...PICNIC_TABLE_2} {...props} />
}

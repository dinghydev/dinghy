import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PICNIC_TABLE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.picnic_table_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 87,
}

export function PicnicTable2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PICNIC_TABLE_2}
      {...props}
      _style={extendStyle(PICNIC_TABLE_2, props)}
    />
  )
}

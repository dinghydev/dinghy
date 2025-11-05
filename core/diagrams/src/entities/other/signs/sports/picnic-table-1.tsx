import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PICNIC_TABLE_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.picnic_table_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 68,
}

export function PicnicTable1(props: NodeProps) {
  return (
    <Shape
      {...PICNIC_TABLE_1}
      {...props}
      _style={extendStyle(PICNIC_TABLE_1, props)}
    />
  )
}

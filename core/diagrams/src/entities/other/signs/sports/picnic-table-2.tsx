import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PICNIC_TABLE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.picnic_table_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 87,
}

export function PicnicTable2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PICNIC_TABLE_2)} />
}

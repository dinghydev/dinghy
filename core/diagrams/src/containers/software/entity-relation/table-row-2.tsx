import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_ROW_2 = {
  _style: {
    container:
      'shape=table;startSize=0;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=0;align=center;resizeLast=1;strokeColor=none;fillColor=none;collapsible=0;',
  },
}

export function TableRow2(props: NodeProps) {
  return (
    <Shape
      {...TABLE_ROW_2}
      {...props}
      _style={extendStyle(TABLE_ROW_2, props)}
    />
  )
}

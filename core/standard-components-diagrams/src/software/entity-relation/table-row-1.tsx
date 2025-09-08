import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_ROW_1 = {
  _style: {
    group:
      'shape=table;startSize=0;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=0;align=center;resizeLast=1;strokeColor=none;fillColor=none;collapsible=0;whiteSpace=wrap;html=1;',
  },
}

export function TableRow1(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABLE_ROW_1}
      {...props}
      _style={extendStyle(TABLE_ROW_1, props)}
    />
  )
}

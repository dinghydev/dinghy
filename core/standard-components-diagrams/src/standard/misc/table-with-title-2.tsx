import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_WITH_TITLE_2 = {
  _style: {
    container:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=0;strokeColor=default;fontSize=16;',
  },
}

export function TableWithTitle2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABLE_WITH_TITLE_2}
      {...props}
      _style={extendStyle(TABLE_WITH_TITLE_2, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_2 = {
  _style: {
    container:
      'shape=table;html=1;whiteSpace=wrap;startSize=0;container=1;collapsible=0;childLayout=tableLayout;columnLines=0;rowLines=0;fontSize=16;strokeColor=default;',
  },
}

export function Table2(props: NodeProps) {
  return <Shape {...TABLE_2} {...props} _style={extendStyle(TABLE_2, props)} />
}

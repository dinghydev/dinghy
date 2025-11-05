import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_1 = {
  _style: {
    container:
      'shape=table;startSize=30;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;align=center;resizeLast=1;html=1;',
  },
}

export function Table1(props: NodeProps) {
  return <Shape {...TABLE_1} {...props} _style={extendStyle(TABLE_1, props)} />
}

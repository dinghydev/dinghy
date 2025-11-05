import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_2 = {
  _style: {
    container:
      'shape=table;startSize=30;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;align=center;resizeLast=1;html=1;whiteSpace=wrap;',
  },
}

export function Table2(props: NodeProps) {
  return <Shape {...TABLE_2} {...props} _style={extendStyle(TABLE_2, props)} />
}

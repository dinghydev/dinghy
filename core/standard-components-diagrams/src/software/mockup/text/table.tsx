import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE = {
  _style: {
    container:
      'shape=table;html=1;whiteSpace=wrap;startSize=0;container=1;collapsible=0;childLayout=tableLayout;strokeWidth=2;',
  },
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} _style={extendStyle(TABLE, props)} />
}

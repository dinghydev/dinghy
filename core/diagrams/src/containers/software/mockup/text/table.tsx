import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE = {
  _style: {
    container:
      'shape=table;html=1;whiteSpace=wrap;startSize=0;container=1;collapsible=0;childLayout=tableLayout;strokeWidth=2;',
  },
}

export function Table(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE)} />
}

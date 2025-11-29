import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_1 = {
  _style: {
    container:
      'shape=table;startSize=0;container=1;collapsible=0;childLayout=tableLayout;fontSize=16;',
  },
}

export function Table1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_1)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_WITH_TITLE_1 = {
  _style: {
    container:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;strokeColor=default;fontSize=16;',
  },
}

export function TableWithTitle1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLE_WITH_TITLE_1)} />
}

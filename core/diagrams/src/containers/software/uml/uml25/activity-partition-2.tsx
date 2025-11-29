import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTIVITY_PARTITION_2 = {
  _style: {
    container:
      'shape=table;html=1;whiteSpace=wrap;startSize=20;container=1;collapsible=0;childLayout=tableLayout;fillColor=none;swimlaneFillColor=#ffffff;strokeColor=none;',
    entity: {},
  },
}

export function ActivityPartition2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTIVITY_PARTITION_2)} />
}

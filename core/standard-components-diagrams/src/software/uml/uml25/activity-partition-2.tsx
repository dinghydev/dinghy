import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVITY_PARTITION_2 = {
  _style: {
    group:
      'shape=table;html=1;whiteSpace=wrap;startSize=20;container=1;collapsible=0;childLayout=tableLayout;fillColor=none;swimlaneFillColor=#ffffff;strokeColor=none;',
    entity: {},
  },
}

export function ActivityPartition2(props: DiagramNodeProps) {
  return <Shape {...ACTIVITY_PARTITION_2} {...props} />
}

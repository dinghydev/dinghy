import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALLOCATION_ACTIVITY_PARTITION_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.cont;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 1,
  _original_height: 160,
}

export function AllocationActivityPartition2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_ACTIVITY_PARTITION_2}
      {...props}
      _style={extendStyle(ALLOCATION_ACTIVITY_PARTITION_2, props)}
    />
  )
}

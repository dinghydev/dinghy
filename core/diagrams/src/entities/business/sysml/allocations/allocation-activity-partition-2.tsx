import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALLOCATION_ACTIVITY_PARTITION_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.cont;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 1,
  _height: 160,
}

export function AllocationActivityPartition2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ALLOCATION_ACTIVITY_PARTITION_2)}
    />
  )
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALLOCATION_ACTIVITY_PARTITION_2 = {
  _style:
    'html=1;shape=mxgraph.sysml.cont;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 160,
}

export function AllocationActivityPartition2(props: DiagramNodeProps) {
  return <Shape {...ALLOCATION_ACTIVITY_PARTITION_2} {...props} />
}

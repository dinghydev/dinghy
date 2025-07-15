import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALLOCATION_ACTIVITY_PARTITION = {
  _style:
    'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;verticalAlign=top;',
  _width: 0,
  _height: 160,
}

export function AllocationActivityPartition(props: DiagramNodeProps) {
  return <Shape {...ALLOCATION_ACTIVITY_PARTITION} {...props} />
}

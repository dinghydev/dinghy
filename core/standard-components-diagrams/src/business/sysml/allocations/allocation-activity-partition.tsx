import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALLOCATION_ACTIVITY_PARTITION = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;verticalAlign=top;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function AllocationActivityPartition(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_ACTIVITY_PARTITION}
      {...props}
      _style={extendStyle(ALLOCATION_ACTIVITY_PARTITION, props)}
    />
  )
}

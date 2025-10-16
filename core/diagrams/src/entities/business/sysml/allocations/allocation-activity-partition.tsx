import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALLOCATION_ACTIVITY_PARTITION = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;verticalAlign=top;',
  },
  _width: 0,
  _height: 160,
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

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALLOCATION_ACTIVITY_PARTITION = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;verticalAlign=top;',
  },
  _width: 0,
  _height: 160,
}

export function AllocationActivityPartition(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ALLOCATION_ACTIVITY_PARTITION)}
    />
  )
}

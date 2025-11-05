import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALLOCATION_GENERAL = {
  _style: {
    entity: 'shape=rect;html=1;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function AllocationGeneral(props: NodeProps) {
  return (
    <Shape
      {...ALLOCATION_GENERAL}
      {...props}
      _style={extendStyle(ALLOCATION_GENERAL, props)}
    />
  )
}

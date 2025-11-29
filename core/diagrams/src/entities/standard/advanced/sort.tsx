import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SORT = {
  _style: {
    entity:
      'shape=sortShape;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Sort(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SORT)} />
}

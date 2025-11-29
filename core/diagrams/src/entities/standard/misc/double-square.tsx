import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOUBLE_SQUARE = {
  _style: {
    entity: 'shape=ext;double=1;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoubleSquare(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOUBLE_SQUARE)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQUARE = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Square(props: NodeProps) {
  return <Shape {...SQUARE} {...props} _style={extendStyle(SQUARE, props)} />
}

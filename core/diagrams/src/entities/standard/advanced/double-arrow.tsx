import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOUBLE_ARROW = {
  _style: {
    entity: 'shape=doubleArrow;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 60,
}

export function DoubleArrow(props: NodeProps) {
  return (
    <Shape
      {...DOUBLE_ARROW}
      {...props}
      _style={extendStyle(DOUBLE_ARROW, props)}
    />
  )
}

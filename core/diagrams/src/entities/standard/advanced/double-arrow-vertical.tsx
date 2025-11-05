import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOUBLE_ARROW_VERTICAL = {
  _style: {
    entity: 'shape=doubleArrow;direction=south;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 100,
}

export function DoubleArrowVertical(props: NodeProps) {
  return (
    <Shape
      {...DOUBLE_ARROW_VERTICAL}
      {...props}
      _style={extendStyle(DOUBLE_ARROW_VERTICAL, props)}
    />
  )
}

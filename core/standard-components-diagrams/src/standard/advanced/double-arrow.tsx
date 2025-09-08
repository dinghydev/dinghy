import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOUBLE_ARROW = {
  _style: {
    entity: 'shape=doubleArrow;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function DoubleArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_ARROW}
      {...props}
      _style={extendStyle(DOUBLE_ARROW, props)}
    />
  )
}

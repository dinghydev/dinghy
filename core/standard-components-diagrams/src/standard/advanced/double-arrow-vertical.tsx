import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_ARROW_VERTICAL = {
  _style: {
    entity: 'shape=doubleArrow;direction=south;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function DoubleArrowVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_ARROW_VERTICAL}
      {...props}
      _style={extendStyle(DOUBLE_ARROW_VERTICAL, props)}
    />
  )
}

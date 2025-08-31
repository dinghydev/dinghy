import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_ARROW_VERTICAL = {
  _style: 'shape=doubleArrow;direction=south;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 100,
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

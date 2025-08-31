import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_ROUNDED_RECTANGLE = {
  _style: {
    entity: 'shape=ext;double=1;rounded=1;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 80,
}

export function DoubleRoundedRectangle(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_ROUNDED_RECTANGLE}
      {...props}
      _style={extendStyle(DOUBLE_ROUNDED_RECTANGLE, props)}
    />
  )
}

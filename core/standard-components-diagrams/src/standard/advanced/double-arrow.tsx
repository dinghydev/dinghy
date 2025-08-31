import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_ARROW = {
  _style: {
    entity: 'shape=doubleArrow;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 60,
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

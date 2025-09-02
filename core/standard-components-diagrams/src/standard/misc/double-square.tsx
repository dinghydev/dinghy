import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_SQUARE = {
  _style: {
    entity: 'shape=ext;double=1;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoubleSquare(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_SQUARE}
      {...props}
      _style={extendStyle(DOUBLE_SQUARE, props)}
    />
  )
}

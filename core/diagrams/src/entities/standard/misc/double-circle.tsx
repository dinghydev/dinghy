import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOUBLE_CIRCLE = {
  _style: {
    entity: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoubleCircle(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_CIRCLE}
      {...props}
      _style={extendStyle(DOUBLE_CIRCLE, props)}
    />
  )
}

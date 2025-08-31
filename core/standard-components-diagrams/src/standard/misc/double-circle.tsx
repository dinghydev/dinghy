import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_CIRCLE = {
  _style: {
    entity: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _width: 60,
  _height: 60,
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

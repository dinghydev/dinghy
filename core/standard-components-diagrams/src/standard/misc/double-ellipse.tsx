import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_ELLIPSE = {
  _style: {
    entity: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 60,
}

export function DoubleEllipse(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_ELLIPSE}
      {...props}
      _style={extendStyle(DOUBLE_ELLIPSE, props)}
    />
  )
}

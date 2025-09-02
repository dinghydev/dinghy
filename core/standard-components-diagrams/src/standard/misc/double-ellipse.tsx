import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_ELLIPSE = {
  _style: {
    entity: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 60,
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

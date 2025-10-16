import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ISOMETRIC_SQUARE = {
  _style: {
    entity: 'html=1;whiteSpace=wrap;aspect=fixed;shape=isoRectangle;',
  },
  _width: 150,
  _height: 90,
}

export function IsometricSquare(props: DiagramNodeProps) {
  return (
    <Shape
      {...ISOMETRIC_SQUARE}
      {...props}
      _style={extendStyle(ISOMETRIC_SQUARE, props)}
    />
  )
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISOMETRIC_SQUARE = {
  _style: 'html=1;whiteSpace=wrap;aspect=fixed;shape=isoRectangle;',
  _width: 150,
  _height: 90,
}

export function IsometricSquare(props: DiagramNodeProps) {
  return <Shape {...ISOMETRIC_SQUARE} {...props} />
}

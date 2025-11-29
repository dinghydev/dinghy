import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ISOMETRIC_SQUARE = {
  _style: {
    entity: 'html=1;whiteSpace=wrap;aspect=fixed;shape=isoRectangle;',
  },
  _width: 150,
  _height: 90,
}

export function IsometricSquare(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ISOMETRIC_SQUARE)} />
}

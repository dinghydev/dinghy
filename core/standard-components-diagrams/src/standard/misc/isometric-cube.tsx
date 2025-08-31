import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ISOMETRIC_CUBE = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;shape=isoCube2;backgroundOutline=1;isoAngle=15;',
  },
  _width: 90,
  _height: 100,
}

export function IsometricCube(props: DiagramNodeProps) {
  return (
    <Shape
      {...ISOMETRIC_CUBE}
      {...props}
      _style={extendStyle(ISOMETRIC_CUBE, props)}
    />
  )
}

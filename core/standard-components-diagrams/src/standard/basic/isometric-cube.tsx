import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ISOMETRIC_CUBE = {
  _style: 'html=1;shape=mxgraph.basic.isocube;isoAngle=15;',
  _width: 60,
  _height: 60,
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

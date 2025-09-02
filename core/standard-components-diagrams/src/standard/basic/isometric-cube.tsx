import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ISOMETRIC_CUBE = {
  _style: {
    entity: 'html=1;shape=mxgraph.basic.isocube;isoAngle=15;',
  },
  _original_width: 100,
  _original_height: 100,
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

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISOMETRIC_CUBE = {
  _style: 'html=1;shape=mxgraph.basic.isocube;isoAngle=15;',
  _width: 100,
  _height: 100,
}

export function IsometricCube(props: DiagramNodeProps) {
  return <Shape {...ISOMETRIC_CUBE} {...props} />
}

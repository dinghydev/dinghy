import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUBE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#10739E;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Cube(props: DiagramNodeProps) {
  return <Shape {...CUBE} {...props} _style={extendStyle(CUBE, props)} />
}

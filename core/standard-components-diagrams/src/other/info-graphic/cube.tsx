import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUBE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedCube;isoAngle=15;fillColor=#10739E;strokeColor=none;',
  _width: 100,
  _height: 100,
}

export function Cube(props: DiagramNodeProps) {
  return <Shape {...CUBE} {...props} />
}

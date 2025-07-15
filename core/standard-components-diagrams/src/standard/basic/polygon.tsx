import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POLYGON = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.polygon;polyCoords=[[0.25,0],[0.75,0],[1,0.25],[1,0.75],[0.75,1],[0.25,1],[0,0.75],[0,0.25]];polyline=0;',
  _width: 100,
  _height: 100,
}

export function Polygon(props: DiagramNodeProps) {
  return <Shape {...POLYGON} {...props} />
}

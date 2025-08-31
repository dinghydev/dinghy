import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POLYGON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.polygon;polyCoords=[[0.25,0],[0.75,0],[1,0.25],[1,0.75],[0.75,1],[0.25,1],[0,0.75],[0,0.25]];polyline=0;',
  },
  _width: 60,
  _height: 60,
}

export function Polygon(props: DiagramNodeProps) {
  return <Shape {...POLYGON} {...props} _style={extendStyle(POLYGON, props)} />
}

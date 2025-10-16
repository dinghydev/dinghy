import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POLYGON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.polygon;polyCoords=[[0.25,0],[0.75,0],[1,0.25],[1,0.75],[0.75,1],[0.25,1],[0,0.75],[0,0.25]];polyline=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Polygon(props: DiagramNodeProps) {
  return <Shape {...POLYGON} {...props} _style={extendStyle(POLYGON, props)} />
}

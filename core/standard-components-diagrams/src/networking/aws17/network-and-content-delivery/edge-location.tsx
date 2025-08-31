import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDGE_LOCATION = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.edge_location;fillColor=#F58536;gradientColor=none;',
  _width: 58.5,
  _height: 64.5,
}

export function EdgeLocation(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDGE_LOCATION}
      {...props}
      _style={extendStyle(EDGE_LOCATION, props)}
    />
  )
}

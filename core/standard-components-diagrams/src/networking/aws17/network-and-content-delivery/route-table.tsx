import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTE_TABLE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.route_table;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 75,
  _original_height: 69,
}

export function RouteTable(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTE_TABLE}
      {...props}
      _style={extendStyle(ROUTE_TABLE, props)}
    />
  )
}

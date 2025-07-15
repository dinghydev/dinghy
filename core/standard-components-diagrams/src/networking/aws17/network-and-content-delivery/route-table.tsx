import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTE_TABLE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.route_table;fillColor=#F58536;gradientColor=none;',
  _width: 75,
  _height: 69,
}

export function RouteTable(props: DiagramNodeProps) {
  return <Shape {...ROUTE_TABLE} {...props} />
}

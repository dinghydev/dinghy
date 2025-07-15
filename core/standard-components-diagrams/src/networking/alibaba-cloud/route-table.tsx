import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTE_TABLE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.route_table;',
  _width: 37.5,
  _height: 47.400000000000006,
}

export function RouteTable(props: DiagramNodeProps) {
  return <Shape {...ROUTE_TABLE} {...props} />
}

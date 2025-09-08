import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTE_TABLE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.route_table;',
  },
  _original_width: 37.5,
  _original_height: 47.400000000000006,
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

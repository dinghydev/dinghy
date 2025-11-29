import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPRESS_ROUTE_TRAFFIC_COLLECTOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Express_Route_Traffic_Collector.svg;strokeColor=none;',
  },
  _original_width: 58.160000000000004,
  _original_height: 68,
}

export function ExpressRouteTrafficCollector(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, EXPRESS_ROUTE_TRAFFIC_COLLECTOR)}
    />
  )
}

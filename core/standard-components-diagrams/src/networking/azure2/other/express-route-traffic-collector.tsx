import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPRESS_ROUTE_TRAFFIC_COLLECTOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Express_Route_Traffic_Collector.svg;strokeColor=none;',
  _width: 58.160000000000004,
  _height: 68,
}

export function ExpressRouteTrafficCollector(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPRESS_ROUTE_TRAFFIC_COLLECTOR}
      {...props}
      _style={extendStyle(EXPRESS_ROUTE_TRAFFIC_COLLECTOR, props)}
    />
  )
}

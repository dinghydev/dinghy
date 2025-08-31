import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTE_FILTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Route_Filters.svg;strokeColor=none;',
  },
  _width: 71,
  _height: 44,
}

export function RouteFilters(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTE_FILTERS}
      {...props}
      _style={extendStyle(ROUTE_FILTERS, props)}
    />
  )
}

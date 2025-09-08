import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTE_FILTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Route_Filters.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 44,
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

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUTE_FILTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Route_Filters.svg;strokeColor=none;',
  },
  _width: 71,
  _height: 44,
}

export function RouteFilters(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROUTE_FILTERS)} />
}

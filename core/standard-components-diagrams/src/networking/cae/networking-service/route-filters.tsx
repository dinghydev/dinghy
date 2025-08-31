import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTE_FILTERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Route_Filter.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 42,
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

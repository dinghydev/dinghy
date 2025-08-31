import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTE_TABLES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/UserDefinedRoute.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function RouteTables(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTE_TABLES}
      {...props}
      _style={extendStyle(ROUTE_TABLES, props)}
    />
  )
}

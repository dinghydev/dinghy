import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTE_TABLES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Route_Tables.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 62,
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

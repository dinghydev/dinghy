import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTE_TABLES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Route_Tables.svg;',
  _width: 64,
  _height: 62,
}

export function RouteTables(props: DiagramNodeProps) {
  return <Shape {...ROUTE_TABLES} {...props} />
}

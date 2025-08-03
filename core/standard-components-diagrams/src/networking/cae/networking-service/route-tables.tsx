import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTE_TABLES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/UserDefinedRoute.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function RouteTables(props: DiagramNodeProps) {
  return <Shape {...ROUTE_TABLES} {...props} />
}

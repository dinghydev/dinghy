import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPRESS_ROUTE_CIRCUITS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Express_Route.svg;strokeColor=none;',
  _width: 50,
  _height: 30,
}

export function ExpressRouteCircuits(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPRESS_ROUTE_CIRCUITS}
      {...props}
      _style={extendStyle(EXPRESS_ROUTE_CIRCUITS, props)}
    />
  )
}

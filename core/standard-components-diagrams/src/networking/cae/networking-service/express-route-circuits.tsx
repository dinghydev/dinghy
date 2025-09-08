import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXPRESS_ROUTE_CIRCUITS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Express_Route.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 30,
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

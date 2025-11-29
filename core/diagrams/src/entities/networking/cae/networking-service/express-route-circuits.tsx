import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPRESS_ROUTE_CIRCUITS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Express_Route.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 30,
}

export function ExpressRouteCircuits(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EXPRESS_ROUTE_CIRCUITS)} />
  )
}

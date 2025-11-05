import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPRESS_ROUTE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.express_route;pointerEvents=1;',
  },
  _width: 50,
  _height: 30,
}

export function ExpressRoute(props: NodeProps) {
  return (
    <Shape
      {...EXPRESS_ROUTE}
      {...props}
      _style={extendStyle(EXPRESS_ROUTE, props)}
    />
  )
}

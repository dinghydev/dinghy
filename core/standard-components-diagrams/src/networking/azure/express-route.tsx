import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXPRESS_ROUTE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.express_route;pointerEvents=1;',
  _width: 50,
  _height: 30,
}

export function ExpressRoute(props: DiagramNodeProps) {
  return <Shape {...EXPRESS_ROUTE} {...props} />
}

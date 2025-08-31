import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETFLOW_ROUTER = {
  _style: {
    entity:
      'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=netflow_router;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _width: 60,
  _height: 60,
}

export function NetflowRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETFLOW_ROUTER}
      {...props}
      _style={extendStyle(NETFLOW_ROUTER, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURE_ROUTER_COLOR = {
  _style: {
    entity:
      'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=secure_router;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SecureRouterColor(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURE_ROUTER_COLOR}
      {...props}
      _style={extendStyle(SECURE_ROUTER_COLOR, props)}
    />
  )
}

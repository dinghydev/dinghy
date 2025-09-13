import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ATM_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.atm_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 78,
  _height: 53,
}

export function AtmRouter(props: DiagramNodeProps) {
  return (
    <Shape {...ATM_ROUTER} {...props} _style={extendStyle(ATM_ROUTER, props)} />
  )
}

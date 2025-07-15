import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETFLOW_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.netflow_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 77,
  _height: 50,
}

export function NetflowRouter(props: DiagramNodeProps) {
  return <Shape {...NETFLOW_ROUTER} {...props} />
}

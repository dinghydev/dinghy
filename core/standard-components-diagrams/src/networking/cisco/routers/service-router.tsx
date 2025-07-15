import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.service_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 53,
}

export function ServiceRouter(props: DiagramNodeProps) {
  return <Shape {...SERVICE_ROUTER} {...props} />
}

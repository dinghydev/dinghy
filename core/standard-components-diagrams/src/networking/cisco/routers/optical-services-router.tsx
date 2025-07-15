import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPTICAL_SERVICES_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.optical_services_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 74,
  _height: 64,
}

export function OpticalServicesRouter(props: DiagramNodeProps) {
  return <Shape {...OPTICAL_SERVICES_ROUTER} {...props} />
}

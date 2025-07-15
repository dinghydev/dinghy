import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIRELESS_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.wireless_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 77,
}

export function WirelessRouter(props: DiagramNodeProps) {
  return <Shape {...WIRELESS_ROUTER} {...props} />
}

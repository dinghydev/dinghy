import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP_TELEPHONY_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.ip_telephony_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 69,
}

export function IpTelephonyRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...IP_TELEPHONY_ROUTER}
      {...props}
      _style={extendStyle(IP_TELEPHONY_ROUTER, props)}
    />
  )
}

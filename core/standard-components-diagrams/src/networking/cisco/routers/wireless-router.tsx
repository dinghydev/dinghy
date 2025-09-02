import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.wireless_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function WirelessRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_ROUTER}
      {...props}
      _style={extendStyle(WIRELESS_ROUTER, props)}
    />
  )
}

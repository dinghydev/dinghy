import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WIRELESS_BRIDGE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.wireless_bridge;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 75,
  _original_height: 61,
}

export function WirelessBridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_BRIDGE}
      {...props}
      _style={extendStyle(WIRELESS_BRIDGE, props)}
    />
  )
}

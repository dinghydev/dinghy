import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WIRELESS_TRANSPORT = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.wireless_transport;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 77,
  _original_height: 54,
}

export function WirelessTransport(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_TRANSPORT}
      {...props}
      _style={extendStyle(WIRELESS_TRANSPORT, props)}
    />
  )
}

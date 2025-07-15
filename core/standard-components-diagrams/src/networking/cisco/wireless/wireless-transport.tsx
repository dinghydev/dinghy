import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIRELESS_TRANSPORT = {
  _style:
    'shape=mxgraph.cisco.wireless.wireless_transport;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 77,
  _height: 54,
}

export function WirelessTransport(props: DiagramNodeProps) {
  return <Shape {...WIRELESS_TRANSPORT} {...props} />
}

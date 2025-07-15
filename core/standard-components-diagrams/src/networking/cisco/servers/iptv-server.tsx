import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPTV_SERVER = {
  _style:
    'shape=mxgraph.cisco.servers.iptv_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 77,
  _height: 51,
}

export function IptvServer(props: DiagramNodeProps) {
  return <Shape {...IPTV_SERVER} {...props} />
}

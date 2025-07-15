import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_UNIFIED_PRESENCE_SERVER = {
  _style:
    'shape=mxgraph.cisco.servers.cisco_unified_presence_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 54,
  _height: 67,
}

export function CiscoUnifiedPresenceServer(props: DiagramNodeProps) {
  return <Shape {...CISCO_UNIFIED_PRESENCE_SERVER} {...props} />
}

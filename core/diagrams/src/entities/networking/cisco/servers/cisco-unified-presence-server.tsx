import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_UNIFIED_PRESENCE_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.cisco_unified_presence_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 54,
  _original_height: 67,
}

export function CiscoUnifiedPresenceServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_UNIFIED_PRESENCE_SERVER}
      {...props}
      _style={extendStyle(CISCO_UNIFIED_PRESENCE_SERVER, props)}
    />
  )
}

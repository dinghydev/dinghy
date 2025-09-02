import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISCOVERY_SEARCH_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.discovery_search_mailbox;',
  },
  _original_width: 55,
  _original_height: 49,
}

export function DiscoverySearchMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCOVERY_SEARCH_MAILBOX}
      {...props}
      _style={extendStyle(DISCOVERY_SEARCH_MAILBOX, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_MAIL_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.3rd_party_mail_server;',
  },
  _original_width: 47,
  _original_height: 59,
}

export function Component3rdPartyMailServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_MAIL_SERVER}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_MAIL_SERVER, props)}
    />
  )
}

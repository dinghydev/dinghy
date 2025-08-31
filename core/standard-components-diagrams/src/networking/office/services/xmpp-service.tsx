import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XMPP_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.xmpp_service;',
  _width: 58,
  _height: 52,
}

export function XmppService(props: DiagramNodeProps) {
  return (
    <Shape
      {...XMPP_SERVICE}
      {...props}
      _style={extendStyle(XMPP_SERVICE, props)}
    />
  )
}

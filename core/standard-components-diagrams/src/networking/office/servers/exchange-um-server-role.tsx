import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXCHANGE_UM_SERVER_ROLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.exchange_um_server_role;',
  },
  _width: 52,
  _height: 59,
}

export function ExchangeUmServerRole(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_UM_SERVER_ROLE}
      {...props}
      _style={extendStyle(EXCHANGE_UM_SERVER_ROLE, props)}
    />
  )
}

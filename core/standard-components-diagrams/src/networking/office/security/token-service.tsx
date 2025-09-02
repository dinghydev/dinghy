import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOKEN_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.token_service;',
  },
  _original_width: 60,
  _original_height: 56,
}

export function TokenService(props: DiagramNodeProps) {
  return (
    <Shape
      {...TOKEN_SERVICE}
      {...props}
      _style={extendStyle(TOKEN_SERVICE, props)}
    />
  )
}

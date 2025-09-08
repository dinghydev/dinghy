import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTHENTICATION_CERT = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.authentication_cert;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AuthenticationCert(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHENTICATION_CERT}
      {...props}
      _style={extendStyle(AUTHENTICATION_CERT, props)}
    />
  )
}

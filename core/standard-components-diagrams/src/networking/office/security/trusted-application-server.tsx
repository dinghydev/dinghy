import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUSTED_APPLICATION_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.trusted_application_server;',
  _width: 46,
  _height: 57,
}

export function TrustedApplicationServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRUSTED_APPLICATION_SERVER}
      {...props}
      _style={extendStyle(TRUSTED_APPLICATION_SERVER, props)}
    />
  )
}

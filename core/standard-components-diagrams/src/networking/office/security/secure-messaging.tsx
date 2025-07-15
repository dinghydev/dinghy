import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURE_MESSAGING = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.secure_messaging;',
  _width: 55,
  _height: 46,
}

export function SecureMessaging(props: DiagramNodeProps) {
  return <Shape {...SECURE_MESSAGING} {...props} />
}

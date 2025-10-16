import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURE_MESSAGING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.secure_messaging;',
  },
  _original_width: 55,
  _original_height: 46,
}

export function SecureMessaging(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURE_MESSAGING}
      {...props}
      _style={extendStyle(SECURE_MESSAGING, props)}
    />
  )
}

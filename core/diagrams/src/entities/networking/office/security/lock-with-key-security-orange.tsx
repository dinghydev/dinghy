import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCK_WITH_KEY_SECURITY_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_with_key_security_orange;',
  },
  _original_width: 47,
  _original_height: 58,
}

export function LockWithKeySecurityOrange(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, LOCK_WITH_KEY_SECURITY_ORANGE)}
    />
  )
}

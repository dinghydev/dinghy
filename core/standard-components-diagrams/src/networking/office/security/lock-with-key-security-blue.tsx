import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK_WITH_KEY_SECURITY_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_with_key_security_blue;',
  _width: 47,
  _height: 58,
}

export function LockWithKeySecurityBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_WITH_KEY_SECURITY_BLUE}
      {...props}
      _style={extendStyle(LOCK_WITH_KEY_SECURITY_BLUE, props)}
    />
  )
}

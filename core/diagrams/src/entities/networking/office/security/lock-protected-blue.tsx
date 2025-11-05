import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCK_PROTECTED_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_protected;fillColor=#2072B8;',
  },
  _width: 38,
  _height: 52,
}

export function LockProtectedBlue(props: NodeProps) {
  return (
    <Shape
      {...LOCK_PROTECTED_BLUE}
      {...props}
      _style={extendStyle(LOCK_PROTECTED_BLUE, props)}
    />
  )
}

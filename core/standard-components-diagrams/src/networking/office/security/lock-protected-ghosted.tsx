import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCK_PROTECTED_GHOSTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_protected;fillColor=#CCCBCB;',
  },
  _original_width: 38,
  _original_height: 52,
}

export function LockProtectedGhosted(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_PROTECTED_GHOSTED}
      {...props}
      _style={extendStyle(LOCK_PROTECTED_GHOSTED, props)}
    />
  )
}

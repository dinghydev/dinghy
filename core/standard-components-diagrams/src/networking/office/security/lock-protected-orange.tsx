import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK_PROTECTED_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_protected;fillColor=#DA4026;',
  },
  _original_width: 38,
  _original_height: 52,
}

export function LockProtectedOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_PROTECTED_ORANGE}
      {...props}
      _style={extendStyle(LOCK_PROTECTED_ORANGE, props)}
    />
  )
}

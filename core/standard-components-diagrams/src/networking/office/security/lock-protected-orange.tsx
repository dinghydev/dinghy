import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCK_PROTECTED_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_protected;fillColor=#DA4026;',
  _width: 38,
  _height: 52,
}

export function LockProtectedOrange(props: DiagramNodeProps) {
  return <Shape {...LOCK_PROTECTED_ORANGE} {...props} />
}

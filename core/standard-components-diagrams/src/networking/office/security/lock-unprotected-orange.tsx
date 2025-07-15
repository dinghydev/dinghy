import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCK_UNPROTECTED_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_unprotected;fillColor=#DA4026;',
  _width: 38,
  _height: 55,
}

export function LockUnprotectedOrange(props: DiagramNodeProps) {
  return <Shape {...LOCK_UNPROTECTED_ORANGE} {...props} />
}

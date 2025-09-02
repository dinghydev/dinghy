import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK_UNPROTECTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_unprotected;',
  },
  _original_width: 38,
  _original_height: 55,
}

export function LockUnprotected(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_UNPROTECTED}
      {...props}
      _style={extendStyle(LOCK_UNPROTECTED, props)}
    />
  )
}

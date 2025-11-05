import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCK_UNPROTECTED_GHOSTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_unprotected;fillColor=#CCCBCB;',
  },
  _width: 38,
  _height: 55,
}

export function LockUnprotectedGhosted(props: NodeProps) {
  return (
    <Shape
      {...LOCK_UNPROTECTED_GHOSTED}
      {...props}
      _style={extendStyle(LOCK_UNPROTECTED_GHOSTED, props)}
    />
  )
}

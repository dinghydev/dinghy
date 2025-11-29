import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCK_UNPROTECTED_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_unprotected;fillColor=#2072B8;',
  },
  _width: 38,
  _height: 55,
}

export function LockUnprotectedBlue(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCK_UNPROTECTED_BLUE)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOCK_PROTECTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_protected;',
  },
  _width: 38,
  _height: 52,
}

export function LockProtected(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_PROTECTED}
      {...props}
      _style={extendStyle(LOCK_PROTECTED, props)}
    />
  )
}

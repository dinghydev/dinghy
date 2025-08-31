import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK_UNPROTECTED_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.lock_unprotected;fillColor=#2072B8;',
  _width: 38,
  _height: 55,
}

export function LockUnprotectedBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCK_UNPROTECTED_BLUE}
      {...props}
      _style={extendStyle(LOCK_UNPROTECTED_BLUE, props)}
    />
  )
}

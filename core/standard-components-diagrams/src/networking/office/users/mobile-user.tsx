import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_USER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.mobile_user;',
  _width: 59,
  _height: 56,
}

export function MobileUser(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_USER}
      {...props}
      _style={extendStyle(MOBILE_USER, props)}
    />
  )
}

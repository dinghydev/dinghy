import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_MANAGEMENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.user_management',
  _width: 50,
  _height: 46,
}

export function UserManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_MANAGEMENT}
      {...props}
      _style={extendStyle(USER_MANAGEMENT, props)}
    />
  )
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user;fillColor=#DA4026;',
  _width: 46,
  _height: 50,
}

export function UserOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_ORANGE}
      {...props}
      _style={extendStyle(USER_ORANGE, props)}
    />
  )
}

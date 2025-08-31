import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_GHOSTED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user;fillColor=#CCCBCB;',
  _width: 46,
  _height: 50,
}

export function UserGhosted(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_GHOSTED}
      {...props}
      _style={extendStyle(USER_GHOSTED, props)}
    />
  )
}

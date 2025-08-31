import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USERS_TWO_GHOSTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.users_two;fillColor=#CCCBCB;',
  },
  _width: 57,
  _height: 43,
}

export function UsersTwoGhosted(props: DiagramNodeProps) {
  return (
    <Shape
      {...USERS_TWO_GHOSTED}
      {...props}
      _style={extendStyle(USERS_TWO_GHOSTED, props)}
    />
  )
}

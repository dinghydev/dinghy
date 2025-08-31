import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNAL_USERS = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.internal_users;',
  _width: 50,
  _height: 48.095,
}

export function InternalUsers(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNAL_USERS}
      {...props}
      _style={extendStyle(INTERNAL_USERS, props)}
    />
  )
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_EXTERNAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user_external;',
  },
  _original_width: 59,
  _original_height: 50,
}

export function UserExternal(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_EXTERNAL}
      {...props}
      _style={extendStyle(USER_EXTERNAL, props)}
    />
  )
}

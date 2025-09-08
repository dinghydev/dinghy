import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user;fillColor=#7FBA42;',
  },
  _original_width: 46,
  _original_height: 50,
}

export function UserGreen(props: DiagramNodeProps) {
  return (
    <Shape {...USER_GREEN} {...props} _style={extendStyle(USER_GREEN, props)} />
  )
}

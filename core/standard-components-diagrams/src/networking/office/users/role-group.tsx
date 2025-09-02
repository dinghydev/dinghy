import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLE_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.role_group;',
  },
  _original_width: 59,
  _original_height: 56,
}

export function RoleGroup(props: DiagramNodeProps) {
  return (
    <Shape {...ROLE_GROUP} {...props} _style={extendStyle(ROLE_GROUP, props)} />
  )
}

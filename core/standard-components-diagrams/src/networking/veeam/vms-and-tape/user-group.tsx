import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_GROUP = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.group;',
  },
  _original_width: 53.6,
  _original_height: 60.4,
}

export function UserGroup(props: DiagramNodeProps) {
  return (
    <Shape {...USER_GROUP} {...props} _style={extendStyle(USER_GROUP, props)} />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.user_group',
  },
  _width: 50,
  _height: 37,
}

export function UserGroup(props: DiagramNodeProps) {
  return (
    <Shape {...USER_GROUP} {...props} _style={extendStyle(USER_GROUP, props)} />
  )
}

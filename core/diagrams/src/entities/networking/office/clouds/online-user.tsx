import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ONLINE_USER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.online_user;',
  },
  _original_width: 93,
  _original_height: 74,
}

export function OnlineUser(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ONLINE_USER)} />
}

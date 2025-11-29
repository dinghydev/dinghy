import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.users;',
  },
  _original_width: 64.5,
  _original_height: 55,
}

export function Users(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USERS)} />
}

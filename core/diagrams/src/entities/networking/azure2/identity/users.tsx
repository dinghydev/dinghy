import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Users.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 70,
}

export function Users(props: NodeProps) {
  return <Shape {...USERS} {...props} _style={extendStyle(USERS, props)} />
}

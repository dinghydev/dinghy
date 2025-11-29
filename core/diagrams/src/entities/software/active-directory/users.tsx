import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USERS = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/users.svg;strokeColor=none;',
  },
  _width: 33,
  _height: 50,
}

export function Users(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USERS)} />
}

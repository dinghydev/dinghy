import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USERS = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/users.svg;strokeColor=none;',
  },
  _width: 33,
  _height: 50,
}

export function Users(props: DiagramNodeProps) {
  return <Shape {...USERS} {...props} _style={extendStyle(USERS, props)} />
}

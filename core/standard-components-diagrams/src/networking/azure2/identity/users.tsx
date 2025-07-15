import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Users.svg;',
  _width: 64,
  _height: 70,
}

export function Users(props: DiagramNodeProps) {
  return <Shape {...USERS} {...props} />
}

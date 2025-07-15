import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_PRIVACY = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/User_Privacy.svg;',
  _width: 36,
  _height: 50,
}

export function UserPrivacy(props: DiagramNodeProps) {
  return <Shape {...USER_PRIVACY} {...props} />
}

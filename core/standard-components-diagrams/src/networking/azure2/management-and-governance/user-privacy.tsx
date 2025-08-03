import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_PRIVACY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/User_Privacy.svg;strokeColor=none;',
  _width: 64,
  _height: 68,
}

export function UserPrivacy(props: DiagramNodeProps) {
  return <Shape {...USER_PRIVACY} {...props} />
}

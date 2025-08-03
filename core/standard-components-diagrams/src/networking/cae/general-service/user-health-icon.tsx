import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_HEALTH_ICON = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/User_Health_Icon.svg;strokeColor=none;',
  _width: 46,
  _height: 50,
}

export function UserHealthIcon(props: DiagramNodeProps) {
  return <Shape {...USER_HEALTH_ICON} {...props} />
}

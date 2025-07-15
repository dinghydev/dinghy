import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TWO_USER_ICON = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Two_User_Icon.svg;',
  _width: 50,
  _height: 50,
}

export function TwoUserIcon(props: DiagramNodeProps) {
  return <Shape {...TWO_USER_ICON} {...props} />
}

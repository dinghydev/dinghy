import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TWO_USER_ICON = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Two_User_Icon.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function TwoUserIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...TWO_USER_ICON}
      {...props}
      _style={extendStyle(TWO_USER_ICON, props)}
    />
  )
}

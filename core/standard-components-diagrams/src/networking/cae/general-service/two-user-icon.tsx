import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TWO_USER_ICON = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Two_User_Icon.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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

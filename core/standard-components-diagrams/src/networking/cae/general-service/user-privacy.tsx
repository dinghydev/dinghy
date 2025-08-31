import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_PRIVACY = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/User_Privacy.svg;strokeColor=none;',
  _width: 36,
  _height: 50,
}

export function UserPrivacy(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_PRIVACY}
      {...props}
      _style={extendStyle(USER_PRIVACY, props)}
    />
  )
}

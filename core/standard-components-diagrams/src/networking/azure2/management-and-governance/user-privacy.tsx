import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_PRIVACY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/User_Privacy.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 68,
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

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_HEALTH_ICON = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/User_Health_Icon.svg;strokeColor=none;',
  },
  _original_width: 46,
  _original_height: 50,
}

export function UserHealthIcon(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USER_HEALTH_ICON)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_SETTINGS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/User_Settings.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.92,
}

export function UserSettings(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USER_SETTINGS)} />
}

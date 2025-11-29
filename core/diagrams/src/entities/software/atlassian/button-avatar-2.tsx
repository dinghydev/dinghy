import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_AVATAR_2 = {
  _style: {
    entity: 'rounded=1;fillColor=#253858;strokeColor=none;html=1;',
  },
  _width: 1,
  _height: 167,
}

export function ButtonAvatar2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_AVATAR_2)} />
}

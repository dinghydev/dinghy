import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER_AVATAR_SMALL = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#0065FF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 24,
  _original_height: 24,
}

export function ContainerAvatarSmall(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CONTAINER_AVATAR_SMALL)} />
  )
}

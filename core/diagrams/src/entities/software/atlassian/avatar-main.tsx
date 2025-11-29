import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVATAR_MAIN = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#0065FF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=25;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function AvatarMain(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AVATAR_MAIN)} />
}

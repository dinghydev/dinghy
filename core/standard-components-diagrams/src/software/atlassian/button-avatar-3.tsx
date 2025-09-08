import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_AVATAR_3 = {
  _style: {
    entity:
      'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;html=1;arcSize=4',
  },
  _original_width: 2,
  _original_height: 167,
}

export function ButtonAvatar3(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_AVATAR_3}
      {...props}
      _style={extendStyle(BUTTON_AVATAR_3, props)}
    />
  )
}

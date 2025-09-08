import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_AVATAR_2 = {
  _style: {
    entity: 'rounded=1;fillColor=#253858;strokeColor=none;html=1;',
  },
  _original_width: 1,
  _original_height: 167,
}

export function ButtonAvatar2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_AVATAR_2}
      {...props}
      _style={extendStyle(BUTTON_AVATAR_2, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_AVATAR = {
  _style: {
    entity:
      'rounded=1;fillColor=none;strokeColor=none;html=1;fontColor=#596780;align=left;fontSize=11;spacingLeft=10;fontSize=11',
  },
  _original_width: 160,
  _original_height: 167,
}

export function ButtonAvatar(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_AVATAR}
      {...props}
      _style={extendStyle(BUTTON_AVATAR, props)}
    />
  )
}

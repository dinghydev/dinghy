import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_AVATAR_2 = {
  _style: {
    entity: 'rounded=1;fillColor=#253858;strokeColor=none;html=1;',
  },
  _width: 1,
  _height: 167,
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

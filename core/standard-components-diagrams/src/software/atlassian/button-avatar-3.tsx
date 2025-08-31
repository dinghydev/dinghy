import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_AVATAR_3 = {
  _style:
    'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;html=1;arcSize=4',
  _width: 2,
  _height: 167,
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

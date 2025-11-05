import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RAISED_BUTTON_PRESSED_2 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;strokeColor=none;fontStyle=1;opacity=12;fontColor=#BDBDBD;shadow=0;',
  },
  _width: 100,
  _height: 36,
}

export function RaisedButtonPressed2(props: NodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_PRESSED_2}
      {...props}
      _style={extendStyle(RAISED_BUTTON_PRESSED_2, props)}
    />
  )
}

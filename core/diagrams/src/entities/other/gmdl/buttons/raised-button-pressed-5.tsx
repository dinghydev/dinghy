import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RAISED_BUTTON_PRESSED_5 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#cccccc;opacity=25;strokeColor=none;fontStyle=1;fontColor=#ffffff;shadow=0;',
  },
  _width: 100,
  _height: 36,
}

export function RaisedButtonPressed5(props: NodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_PRESSED_5}
      {...props}
      _style={extendStyle(RAISED_BUTTON_PRESSED_5, props)}
    />
  )
}

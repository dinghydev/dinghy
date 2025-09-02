import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RAISED_BUTTON_PRESSED_5 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#cccccc;opacity=25;strokeColor=none;fontStyle=1;fontColor=#ffffff;shadow=0;',
  },
  _original_width: 100,
  _original_height: 36,
}

export function RaisedButtonPressed5(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_PRESSED_5}
      {...props}
      _style={extendStyle(RAISED_BUTTON_PRESSED_5, props)}
    />
  )
}

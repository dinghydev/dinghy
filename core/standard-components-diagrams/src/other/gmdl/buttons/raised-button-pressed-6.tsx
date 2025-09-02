import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RAISED_BUTTON_PRESSED_6 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=none;strokeColor=none;fontStyle=1;opacity=12;fontColor=#BDBDBD;shadow=1;',
  },
  _original_width: 100,
  _original_height: 36,
}

export function RaisedButtonPressed6(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_PRESSED_6}
      {...props}
      _style={extendStyle(RAISED_BUTTON_PRESSED_6, props)}
    />
  )
}

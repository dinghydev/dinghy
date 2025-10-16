import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RAISED_BUTTON_FOCUSED = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#e0e0e0;strokeColor=none;fontStyle=1;shadow=1;',
  },
  _width: 100,
  _height: 36,
}

export function RaisedButtonFocused(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_FOCUSED}
      {...props}
      _style={extendStyle(RAISED_BUTTON_FOCUSED, props)}
    />
  )
}

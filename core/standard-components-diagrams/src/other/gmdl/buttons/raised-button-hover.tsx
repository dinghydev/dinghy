import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RAISED_BUTTON_HOVER = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#999999;opacity=20;strokeColor=none;fontStyle=1;shadow=0;',
  },
  _original_width: 100,
  _original_height: 36,
}

export function RaisedButtonHover(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_HOVER}
      {...props}
      _style={extendStyle(RAISED_BUTTON_HOVER, props)}
    />
  )
}

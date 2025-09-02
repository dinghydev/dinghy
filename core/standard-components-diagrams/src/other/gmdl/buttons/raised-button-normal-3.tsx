import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RAISED_BUTTON_NORMAL_3 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=none;strokeColor=none;fontStyle=1;shadow=0;',
  },
  _original_width: 100,
  _original_height: 36,
}

export function RaisedButtonNormal3(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_NORMAL_3}
      {...props}
      _style={extendStyle(RAISED_BUTTON_NORMAL_3, props)}
    />
  )
}

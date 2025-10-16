import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RAISED_BUTTON_NORMAL_2 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#2196F3;strokeColor=none;fontStyle=1;shadow=1;fontColor=#ffffff;',
  },
  _width: 100,
  _height: 36,
}

export function RaisedButtonNormal2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_NORMAL_2}
      {...props}
      _style={extendStyle(RAISED_BUTTON_NORMAL_2, props)}
    />
  )
}

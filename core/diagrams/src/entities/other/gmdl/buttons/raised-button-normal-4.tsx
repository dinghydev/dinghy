import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RAISED_BUTTON_NORMAL_4 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=none;strokeColor=none;fontStyle=1;fontColor=#ffffff;shadow=0;',
  },
  _width: 100,
  _height: 36,
}

export function RaisedButtonNormal4(props: NodeProps) {
  return (
    <Shape
      {...RAISED_BUTTON_NORMAL_4}
      {...props}
      _style={extendStyle(RAISED_BUTTON_NORMAL_4, props)}
    />
  )
}

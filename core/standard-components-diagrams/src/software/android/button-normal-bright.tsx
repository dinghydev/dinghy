import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_NORMAL_BRIGHT = {
  _style: {
    entity:
      'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#E6E6E6;align=center;strokeColor=#E6E6E6;fontColor=#333333;',
  },
  _width: 105.5,
  _height: 16.88,
}

export function ButtonNormalBright(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_NORMAL_BRIGHT}
      {...props}
      _style={extendStyle(BUTTON_NORMAL_BRIGHT, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_FOCUSED_DISABLED_BRIGHT = {
  _style: {
    entity:
      'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#F4F4F4;align=center;strokeColor=#E6E6E6;fontColor=#CCCCCC;',
  },
  _width: 105.5,
  _height: 16.88,
}

export function ButtonFocusedDisabledBright(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, BUTTON_FOCUSED_DISABLED_BRIGHT)}
    />
  )
}

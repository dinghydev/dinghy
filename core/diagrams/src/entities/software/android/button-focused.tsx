import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_FOCUSED = {
  _style: {
    entity:
      'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#666666;align=center;strokeColor=#999999;fontColor=#ffffff;',
  },
  _width: 105.5,
  _height: 16.88,
}

export function ButtonFocused(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_FOCUSED}
      {...props}
      _style={extendStyle(BUTTON_FOCUSED, props)}
    />
  )
}

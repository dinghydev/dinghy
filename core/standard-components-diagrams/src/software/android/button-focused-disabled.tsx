import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_FOCUSED_DISABLED = {
  _style:
    'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#333333;align=center;strokeColor=#4D4D4D;fontColor=#666666;',
  _width: 105.5,
  _height: 16.88,
}

export function ButtonFocusedDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_FOCUSED_DISABLED}
      {...props}
      _style={extendStyle(BUTTON_FOCUSED_DISABLED, props)}
    />
  )
}

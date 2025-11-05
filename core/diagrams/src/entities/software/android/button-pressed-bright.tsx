import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_PRESSED_BRIGHT = {
  _style: {
    entity:
      'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#B3B3B3;align=center;strokeColor=#E6E6E6;fontColor=#333333;strokeWidth=2;',
  },
  _width: 105.5,
  _height: 16.88,
}

export function ButtonPressedBright(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_PRESSED_BRIGHT}
      {...props}
      _style={extendStyle(BUTTON_PRESSED_BRIGHT, props)}
    />
  )
}

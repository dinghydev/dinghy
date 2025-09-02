import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_FOCUSED_BRIGHT = {
  _style: {
    entity:
      'rounded=1;html=1;shadow=0;dashed=0;whiteSpace=wrap;fontSize=10;fillColor=#E6E6E6;align=center;strokeColor=#B3B3B3;fontColor=#333333;',
  },
  _original_width: 105.5,
  _original_height: 16.88,
}

export function ButtonFocusedBright(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_FOCUSED_BRIGHT}
      {...props}
      _style={extendStyle(BUTTON_FOCUSED_BRIGHT, props)}
    />
  )
}

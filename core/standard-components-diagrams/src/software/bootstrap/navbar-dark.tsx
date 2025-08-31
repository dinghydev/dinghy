import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAVBAR_DARK = {
  _style:
    'html=1;shadow=0;dashed=0;fillColor=#343A40;strokeColor=none;fontSize=16;fontColor=#ffffff;align=left;spacing=15;',
  _width: 0,
  _height: 60,
}

export function NavbarDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVBAR_DARK}
      {...props}
      _style={extendStyle(NAVBAR_DARK, props)}
    />
  )
}

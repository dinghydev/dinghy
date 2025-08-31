import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAVBAR_LIGHT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;fillColor=#E3F3FD;strokeColor=none;fontSize=16;fontColor=#ffffff;align=left;spacing=15;',
  },
  _width: 0,
  _height: 60,
}

export function NavbarLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVBAR_LIGHT}
      {...props}
      _style={extendStyle(NAVBAR_LIGHT, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAVBAR_BLUE = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;fillColor=#0085FC;strokeColor=none;fontSize=16;fontColor=#ffffff;align=left;spacing=15;',
  },
  _width: 0,
  _height: 60,
}

export function NavbarBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVBAR_BLUE}
      {...props}
      _style={extendStyle(NAVBAR_BLUE, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAVBAR_LIGHT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;fillColor=#E3F3FD;strokeColor=none;fontSize=16;fontColor=#ffffff;align=left;spacing=15;',
  },
  _width: 0,
  _height: 60,
}

export function NavbarLight(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NAVBAR_LIGHT)} />
}

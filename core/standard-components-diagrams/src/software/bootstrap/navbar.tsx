import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAVBAR = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;fillColor=#F8F9FA;strokeColor=none;fontSize=16;fontColor=#181819;align=left;spacing=15;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function Navbar(props: DiagramNodeProps) {
  return <Shape {...NAVBAR} {...props} _style={extendStyle(NAVBAR, props)} />
}

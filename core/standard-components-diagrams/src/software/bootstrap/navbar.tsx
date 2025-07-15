import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAVBAR = {
  _style:
    'html=1;shadow=0;dashed=0;fillColor=#F8F9FA;strokeColor=none;fontSize=16;fontColor=#181819;align=left;spacing=15;',
  _width: 0,
  _height: 60,
}

export function Navbar(props: DiagramNodeProps) {
  return <Shape {...NAVBAR} {...props} />
}

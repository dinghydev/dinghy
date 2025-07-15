import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAVBAR_WITH_TEXT = {
  _style:
    'html=1;shadow=0;dashed=0;fillColor=#F8F9FA;strokeColor=none;fontSize=16;fontColor=#7C7C7D;align=right;spacing=15;',
  _width: 0,
  _height: 60,
}

export function NavbarWithText(props: DiagramNodeProps) {
  return <Shape {...NAVBAR_WITH_TEXT} {...props} />
}

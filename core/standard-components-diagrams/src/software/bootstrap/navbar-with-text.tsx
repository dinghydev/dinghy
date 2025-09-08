import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAVBAR_WITH_TEXT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;fillColor=#F8F9FA;strokeColor=none;fontSize=16;fontColor=#7C7C7D;align=right;spacing=15;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function NavbarWithText(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVBAR_WITH_TEXT}
      {...props}
      _style={extendStyle(NAVBAR_WITH_TEXT, props)}
    />
  )
}

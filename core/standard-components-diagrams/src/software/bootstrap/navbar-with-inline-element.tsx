import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAVBAR_WITH_INLINE_ELEMENT = {
  _style:
    'html=1;shadow=0;dashed=0;fillColor=#F8F9FA;strokeColor=none;fontSize=16;fontColor=#7C7C7D;align=left;spacing=15;',
  _width: 0,
  _height: 60,
}

export function NavbarWithInlineElement(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAVBAR_WITH_INLINE_ELEMENT}
      {...props}
      _style={extendStyle(NAVBAR_WITH_INLINE_ELEMENT, props)}
    />
  )
}

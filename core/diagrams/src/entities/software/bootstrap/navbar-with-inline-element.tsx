import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAVBAR_WITH_INLINE_ELEMENT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;fillColor=#F8F9FA;strokeColor=none;fontSize=16;fontColor=#7C7C7D;align=left;spacing=15;',
  },
  _width: 0,
  _height: 60,
}

export function NavbarWithInlineElement(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, NAVBAR_WITH_INLINE_ELEMENT)} />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DROPDOWN_BUTTON_EDITABLE = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=#cccccc;',
  },
  _width: 100,
  _height: 40,
}

export function DropdownButtonEditable(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DROPDOWN_BUTTON_EDITABLE)} />
  )
}

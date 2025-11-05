import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DROPDOWN_BUTTON = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=#cccccc;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 30,
}

export function DropdownButton(props: NodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON, props)}
    />
  )
}

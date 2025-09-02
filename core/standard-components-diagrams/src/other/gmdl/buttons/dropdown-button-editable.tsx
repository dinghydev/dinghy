import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPDOWN_BUTTON_EDITABLE = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=#cccccc;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function DropdownButtonEditable(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON_EDITABLE}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON_EDITABLE, props)}
    />
  )
}

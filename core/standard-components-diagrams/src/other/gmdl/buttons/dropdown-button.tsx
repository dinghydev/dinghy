import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPDOWN_BUTTON = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=#cccccc;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function DropdownButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPDOWN_BUTTON}
      {...props}
      _style={extendStyle(DROPDOWN_BUTTON, props)}
    />
  )
}

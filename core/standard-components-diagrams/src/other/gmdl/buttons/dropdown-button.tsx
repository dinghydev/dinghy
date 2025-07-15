import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DROPDOWN_BUTTON = {
  _style:
    'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=#cccccc;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 30,
}

export function DropdownButton(props: DiagramNodeProps) {
  return <Shape {...DROPDOWN_BUTTON} {...props} />
}

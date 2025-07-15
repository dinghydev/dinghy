import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_FOCUS_DARK = {
  _style:
    'text;fontColor=#ffffff;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 35,
}

export function SingleLineTextFieldFocusDark(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_FOCUS_DARK} {...props} />
}

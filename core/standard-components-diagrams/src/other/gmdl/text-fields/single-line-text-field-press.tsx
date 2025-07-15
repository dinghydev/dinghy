import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_PRESS = {
  _style:
    'text;fontColor=#808080;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;opacity=50;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 35,
}

export function SingleLineTextFieldPress(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_PRESS} {...props} />
}

import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_4 = {
  _style:
    'text;fontColor=#cccccc;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 55,
}

export function SingleLineTextFieldNormalLight4(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_4} {...props} />
}

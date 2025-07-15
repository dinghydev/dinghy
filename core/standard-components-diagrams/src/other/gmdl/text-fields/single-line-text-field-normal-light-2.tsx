import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_2 = {
  _style:
    'text;fontColor=#1F9BFD;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 55,
}

export function SingleLineTextFieldNormalLight2(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_2} {...props} />
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_4 = {
  _style:
    'text;fontColor=#999999;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;textOpacity=80;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 55,
}

export function SingleLineTextFieldNormal4(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_4}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_4, props)}
    />
  )
}

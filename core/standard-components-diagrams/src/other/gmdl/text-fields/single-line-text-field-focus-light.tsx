import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_FOCUS_LIGHT = {
  _style:
    'text;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 35,
}

export function SingleLineTextFieldFocusLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_FOCUS_LIGHT}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_FOCUS_LIGHT, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_FOCUS_DARK = {
  _style: {
    entity:
      'text;fontColor=#ffffff;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 35,
}

export function SingleLineTextFieldFocusDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_FOCUS_DARK}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_FOCUS_DARK, props)}
    />
  )
}

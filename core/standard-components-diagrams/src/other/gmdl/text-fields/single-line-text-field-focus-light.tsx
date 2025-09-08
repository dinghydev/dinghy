import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_FOCUS_LIGHT = {
  _style: {
    entity:
      'text;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 35,
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

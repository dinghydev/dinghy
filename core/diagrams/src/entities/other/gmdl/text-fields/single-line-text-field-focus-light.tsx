import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_FOCUS_LIGHT = {
  _style: {
    entity:
      'text;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 35,
}

export function SingleLineTextFieldFocusLight(props: NodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_FOCUS_LIGHT}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_FOCUS_LIGHT, props)}
    />
  )
}

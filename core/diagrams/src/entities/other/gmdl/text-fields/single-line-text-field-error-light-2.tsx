import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_ERROR_LIGHT_2 = {
  _style: {
    entity:
      'text;fontColor=#ff0000;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 2,
  _height: 55,
}

export function SingleLineTextFieldErrorLight2(props: NodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_ERROR_LIGHT_2}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_ERROR_LIGHT_2, props)}
    />
  )
}

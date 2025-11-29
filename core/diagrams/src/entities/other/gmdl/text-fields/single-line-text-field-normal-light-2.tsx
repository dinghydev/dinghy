import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_2 = {
  _style: {
    entity:
      'text;fontColor=#1F9BFD;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 55,
}

export function SingleLineTextFieldNormalLight2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_2)}
    />
  )
}

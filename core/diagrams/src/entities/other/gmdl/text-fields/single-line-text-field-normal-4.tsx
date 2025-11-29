import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_4 = {
  _style: {
    entity:
      'text;fontColor=#999999;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;textOpacity=80;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 55,
}

export function SingleLineTextFieldNormal4(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SINGLE_LINE_TEXT_FIELD_NORMAL_4)}
    />
  )
}

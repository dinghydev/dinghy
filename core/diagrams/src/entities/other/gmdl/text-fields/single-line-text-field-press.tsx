import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_PRESS = {
  _style: {
    entity:
      'text;fontColor=#808080;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;opacity=50;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 35,
}

export function SingleLineTextFieldPress(props: NodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_PRESS}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_PRESS, props)}
    />
  )
}

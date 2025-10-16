import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_3 = {
  _style: {
    entity:
      'text;fontColor=#cccccc;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 1,
  _height: 55,
}

export function SingleLineTextFieldNormalDark3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_3}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_3, props)}
    />
  )
}

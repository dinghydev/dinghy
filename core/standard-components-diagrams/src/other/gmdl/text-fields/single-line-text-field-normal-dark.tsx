import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_DARK = {
  _style: {
    entity:
      'text;fontColor=#999999;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 35,
}

export function SingleLineTextFieldNormalDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_DARK}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_DARK, props)}
    />
  )
}

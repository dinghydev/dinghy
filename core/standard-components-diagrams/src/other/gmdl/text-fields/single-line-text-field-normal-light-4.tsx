import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_4 = {
  _style: {
    entity:
      'text;fontColor=#cccccc;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 55,
}

export function SingleLineTextFieldNormalLight4(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_4}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_4, props)}
    />
  )
}

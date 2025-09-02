import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_2 = {
  _style: {
    entity:
      'text;fontColor=#999999;fontSize=12;verticalAlign=middle;strokeColor=none;fillColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 55,
}

export function SingleLineTextFieldNormalDark2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_2}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_2, props)}
    />
  )
}

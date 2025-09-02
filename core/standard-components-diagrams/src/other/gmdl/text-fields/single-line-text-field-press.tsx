import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_PRESS = {
  _style: {
    entity:
      'text;fontColor=#808080;fontSize=16;verticalAlign=middle;strokeColor=none;fillColor=none;opacity=50;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 35,
}

export function SingleLineTextFieldPress(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_PRESS}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_PRESS, props)}
    />
  )
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_HOVER = {
  _style:
    'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#cccccc;opacity=50;',
  _width: 1,
  _height: 35,
}

export function SingleLineTextFieldHover(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_HOVER}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_HOVER, props)}
    />
  )
}

import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_3 = {
  _style: {
    entity:
      'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#999999;opacity=80;',
  },
  _width: 1,
  _height: 35,
}

export function SingleLineTextFieldNormal3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_3}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_3, props)}
    />
  )
}

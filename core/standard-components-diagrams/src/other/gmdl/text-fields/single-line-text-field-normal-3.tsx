import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_3 = {
  _style: {
    entity:
      'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#999999;opacity=80;',
  },
  _original_width: 1,
  _original_height: 35,
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

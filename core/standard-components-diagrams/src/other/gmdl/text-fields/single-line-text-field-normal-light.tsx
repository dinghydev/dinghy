import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT = {
  _style: {
    entity: 'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#eeeeee;',
  },
  _original_width: 1,
  _original_height: 35,
}

export function SingleLineTextFieldNormalLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT, props)}
    />
  )
}

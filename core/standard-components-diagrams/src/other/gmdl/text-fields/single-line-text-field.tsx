import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  },
  _original_width: 346,
  _original_height: 360,
}

export function SingleLineTextField(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD, props)}
    />
  )
}

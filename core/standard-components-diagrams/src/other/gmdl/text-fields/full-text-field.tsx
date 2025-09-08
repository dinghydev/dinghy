import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FULL_TEXT_FIELD = {
  _style: {
    entity:
      'dashed=0;shape=rect;shadow=1;strokeColor=#eeeeee;strokeWidth=1;fillColor=#ffffff;fontSize=22;fontColor=#CCCCCC;align=left;spacingLeft=65;whiteSpace=wrap;html=1;',
  },
  _original_width: 362,
  _original_height: 56,
}

export function FullTextField(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULL_TEXT_FIELD}
      {...props}
      _style={extendStyle(FULL_TEXT_FIELD, props)}
    />
  )
}

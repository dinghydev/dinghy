import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_MESSAGE_WITH_SUBTITLE_3 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;html=1;whiteSpace=wrap;fontSize=11;fontColor=#596780',
  },
  _original_width: 2,
  _original_height: 63,
}

export function InlineMessageWithSubtitle3(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_MESSAGE_WITH_SUBTITLE_3}
      {...props}
      _style={extendStyle(INLINE_MESSAGE_WITH_SUBTITLE_3, props)}
    />
  )
}

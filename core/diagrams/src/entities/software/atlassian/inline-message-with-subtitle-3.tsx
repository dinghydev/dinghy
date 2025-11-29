import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INLINE_MESSAGE_WITH_SUBTITLE_3 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;html=1;whiteSpace=wrap;fontSize=11;fontColor=#596780',
  },
  _width: 2,
  _height: 63,
}

export function InlineMessageWithSubtitle3(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INLINE_MESSAGE_WITH_SUBTITLE_3)}
    />
  )
}

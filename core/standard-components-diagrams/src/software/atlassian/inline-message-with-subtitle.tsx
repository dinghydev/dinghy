import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INLINE_MESSAGE_WITH_SUBTITLE = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#403294;strokeColor=none;fontSize=14;fontStyle=1;align=center;fontColor=#ffffff;sketch=0;',
  },
  _original_width: 0,
  _original_height: 63,
}

export function InlineMessageWithSubtitle(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_MESSAGE_WITH_SUBTITLE}
      {...props}
      _style={extendStyle(INLINE_MESSAGE_WITH_SUBTITLE, props)}
    />
  )
}

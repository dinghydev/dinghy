import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INLINE_MESSAGE_WITH_SUBTITLE_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=3;fillColor=#ffffff;strokeColor=#DFE1E5;strokeWidth=1;shadow=1;align=left;html=1;whiteSpace=wrap;spacingLeft=20;spacingRight=20;fontSize=12;',
  },
  _width: 1,
  _height: 63,
}

export function InlineMessageWithSubtitle2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_MESSAGE_WITH_SUBTITLE_2}
      {...props}
      _style={extendStyle(INLINE_MESSAGE_WITH_SUBTITLE_2, props)}
    />
  )
}

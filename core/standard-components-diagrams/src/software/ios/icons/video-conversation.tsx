import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIDEO_CONVERSATION = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.video_conversation;',
  },
  _original_width: 30,
  _original_height: 15,
}

export function VideoConversation(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_CONVERSATION}
      {...props}
      _style={extendStyle(VIDEO_CONVERSATION, props)}
    />
  )
}

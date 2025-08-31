import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_CONVERSATION = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.video_conversation;',
  },
  _width: 30,
  _height: 15,
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

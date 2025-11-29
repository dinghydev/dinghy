import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_CONVERSATION = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.video_conversation;',
  },
  _width: 30,
  _height: 15,
}

export function VideoConversation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIDEO_CONVERSATION)} />
}

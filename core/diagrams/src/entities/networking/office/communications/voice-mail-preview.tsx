import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOICE_MAIL_PREVIEW = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.voice_mail_preview;',
  },
  _original_width: 46,
  _original_height: 56,
}

export function VoiceMailPreview(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VOICE_MAIL_PREVIEW)} />
}

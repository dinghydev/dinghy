import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROTECTED_VOICE_MAIL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.protected_voice_mail;',
  },
  _original_width: 59,
  _original_height: 51,
}

export function ProtectedVoiceMail(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROTECTED_VOICE_MAIL}
      {...props}
      _style={extendStyle(PROTECTED_VOICE_MAIL, props)}
    />
  )
}

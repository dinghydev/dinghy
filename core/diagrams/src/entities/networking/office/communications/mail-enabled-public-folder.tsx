import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAIL_ENABLED_PUBLIC_FOLDER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.mail_enabled_public_folder;',
  },
  _original_width: 58,
  _original_height: 52,
}

export function MailEnabledPublicFolder(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MAIL_ENABLED_PUBLIC_FOLDER)} />
  )
}

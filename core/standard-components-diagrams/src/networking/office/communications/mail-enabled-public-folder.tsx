import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAIL_ENABLED_PUBLIC_FOLDER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.mail_enabled_public_folder;',
  },
  _width: 58,
  _height: 52,
}

export function MailEnabledPublicFolder(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAIL_ENABLED_PUBLIC_FOLDER}
      {...props}
      _style={extendStyle(MAIL_ENABLED_PUBLIC_FOLDER, props)}
    />
  )
}

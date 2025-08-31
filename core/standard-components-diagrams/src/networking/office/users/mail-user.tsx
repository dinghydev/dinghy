import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAIL_USER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.mail_user;',
  },
  _width: 58,
  _height: 59,
}

export function MailUser(props: DiagramNodeProps) {
  return (
    <Shape {...MAIL_USER} {...props} _style={extendStyle(MAIL_USER, props)} />
  )
}

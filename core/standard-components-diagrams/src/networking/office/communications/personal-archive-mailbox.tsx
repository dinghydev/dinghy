import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERSONAL_ARCHIVE_MAILBOX = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.personal_archive_mailbox;',
  _width: 59,
  _height: 58,
}

export function PersonalArchiveMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSONAL_ARCHIVE_MAILBOX}
      {...props}
      _style={extendStyle(PERSONAL_ARCHIVE_MAILBOX, props)}
    />
  )
}

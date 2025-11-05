import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SITE_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.site_mailbox;',
  },
  _original_width: 59,
  _original_height: 54,
}

export function SiteMailbox(props: NodeProps) {
  return (
    <Shape
      {...SITE_MAILBOX}
      {...props}
      _style={extendStyle(SITE_MAILBOX, props)}
    />
  )
}

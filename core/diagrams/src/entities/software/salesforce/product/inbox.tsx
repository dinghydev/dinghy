import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INBOX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.inbox;',
  },
  _original_width: 60,
  _original_height: 45,
}

export function Inbox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INBOX)} />
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INBOX_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.inbox2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Inbox2(props: DiagramNodeProps) {
  return <Shape {...INBOX_2} {...props} _style={extendStyle(INBOX_2, props)} />
}

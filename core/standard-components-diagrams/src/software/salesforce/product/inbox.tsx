import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INBOX = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.inbox;',
  _width: 60,
  _height: 45,
}

export function Inbox(props: DiagramNodeProps) {
  return <Shape {...INBOX} {...props} />
}

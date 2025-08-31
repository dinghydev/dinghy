import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INBOX_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.inbox2;',
  },
  _width: 60,
  _height: 60,
}

export function Inbox2(props: DiagramNodeProps) {
  return <Shape {...INBOX_2} {...props} _style={extendStyle(INBOX_2, props)} />
}

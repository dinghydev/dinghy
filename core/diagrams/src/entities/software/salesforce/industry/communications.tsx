import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMUNICATIONS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.communications;',
  },
  _original_width: 47.400000000000006,
  _original_height: 60,
}

export function Communications(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMUNICATIONS)} />
}

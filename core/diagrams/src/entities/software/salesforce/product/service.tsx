import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.service;',
  },
  _original_width: 60,
  _original_height: 49.199999999999996,
}

export function Service(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVICE)} />
}

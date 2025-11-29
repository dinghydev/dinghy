import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.integration;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Integration(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTEGRATION)} />
}

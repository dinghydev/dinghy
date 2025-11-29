import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOVERNMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.government;',
  },
  _original_width: 51.6,
  _original_height: 60,
}

export function Government(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GOVERNMENT)} />
}

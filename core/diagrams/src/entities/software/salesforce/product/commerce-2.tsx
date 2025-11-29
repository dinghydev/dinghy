import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMERCE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.commerce2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Commerce2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMERCE_2)} />
}

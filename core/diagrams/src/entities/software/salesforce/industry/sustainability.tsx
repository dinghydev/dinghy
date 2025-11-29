import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUSTAINABILITY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sustainability;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Sustainability(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUSTAINABILITY)} />
}

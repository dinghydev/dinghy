import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENERGY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.energy;',
  },
  _original_width: 45,
  _original_height: 60,
}

export function Energy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ENERGY)} />
}

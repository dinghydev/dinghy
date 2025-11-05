import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENERGY_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.energy2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Energy2(props: NodeProps) {
  return (
    <Shape {...ENERGY_2} {...props} _style={extendStyle(ENERGY_2, props)} />
  )
}

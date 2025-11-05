import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOTS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.bots;',
  },
  _original_width: 60,
  _original_height: 57,
}

export function Bots(props: NodeProps) {
  return <Shape {...BOTS} {...props} _style={extendStyle(BOTS, props)} />
}

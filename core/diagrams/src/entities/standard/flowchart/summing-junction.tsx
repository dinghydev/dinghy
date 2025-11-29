import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUMMING_JUNCTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.or;',
  },
  _original_width: 70,
  _original_height: 70,
}

export function SummingJunction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUMMING_JUNCTION)} />
}

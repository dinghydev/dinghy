import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PIE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.pie;startAngle=0.2;endAngle=0.9;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Pie(props: NodeProps) {
  return <Shape {...PIE} {...props} _style={extendStyle(PIE, props)} />
}

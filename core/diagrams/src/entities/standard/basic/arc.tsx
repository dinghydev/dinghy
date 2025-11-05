import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.arc;startAngle=0.3;endAngle=0.1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Arc(props: NodeProps) {
  return <Shape {...ARC} {...props} _style={extendStyle(ARC, props)} />
}

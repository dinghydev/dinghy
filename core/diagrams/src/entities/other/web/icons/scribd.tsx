import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCRIBD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.scribd;fillColor=#1D637D;gradientColor=#071920',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Scribd(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCRIBD)} />
}

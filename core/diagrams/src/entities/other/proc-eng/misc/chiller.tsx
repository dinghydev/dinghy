import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHILLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.chiller;',
  },
  _width: 155,
  _height: 115,
}

export function Chiller(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHILLER)} />
}

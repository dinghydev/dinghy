import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BREATHER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.breather;',
  },
  _width: 50,
  _height: 30,
}

export function Breather(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BREATHER)} />
}

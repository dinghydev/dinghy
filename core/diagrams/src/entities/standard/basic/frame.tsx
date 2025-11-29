import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRAME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.frame;dx=10;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function Frame(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FRAME)} />
}

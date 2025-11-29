import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLAQUE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.plaque;dx=6;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function Plaque(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PLAQUE)} />
}

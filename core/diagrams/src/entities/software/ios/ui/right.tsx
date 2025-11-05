import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RIGHT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.right;strokeColor=#0080f0;',
  },
  _width: 6,
  _height: 12,
}

export function Right(props: NodeProps) {
  return <Shape {...RIGHT} {...props} _style={extendStyle(RIGHT, props)} />
}

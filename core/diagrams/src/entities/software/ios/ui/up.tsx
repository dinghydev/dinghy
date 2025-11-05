import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.up;strokeColor=#0080f0;',
  },
  _width: 12,
  _height: 6,
}

export function Up(props: NodeProps) {
  return <Shape {...UP} {...props} _style={extendStyle(UP, props)} />
}

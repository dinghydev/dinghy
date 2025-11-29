import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.up;',
  },
  _width: 21,
  _height: 25.5,
}

export function Up(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, UP)} />
}

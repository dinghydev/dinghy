import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOWN = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.down;',
  },
  _width: 21,
  _height: 25.5,
}

export function Down(props: NodeProps) {
  return <Shape {...DOWN} {...props} _style={extendStyle(DOWN, props)} />
}

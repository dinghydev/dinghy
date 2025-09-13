import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOWN = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.down;strokeColor=#0080f0;',
  },
  _width: 12,
  _height: 6,
}

export function Down(props: DiagramNodeProps) {
  return <Shape {...DOWN} {...props} _style={extendStyle(DOWN, props)} />
}

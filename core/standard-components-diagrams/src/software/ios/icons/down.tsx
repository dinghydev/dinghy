import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOWN = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.down;',
  },
  _width: 21,
  _height: 25.5,
}

export function Down(props: DiagramNodeProps) {
  return <Shape {...DOWN} {...props} _style={extendStyle(DOWN, props)} />
}

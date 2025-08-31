import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UP = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.up;',
  _width: 21,
  _height: 25.5,
}

export function Up(props: DiagramNodeProps) {
  return <Shape {...UP} {...props} _style={extendStyle(UP, props)} />
}

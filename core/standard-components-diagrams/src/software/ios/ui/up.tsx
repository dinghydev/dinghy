import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UP = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.up;strokeColor=#0080f0;',
  _width: 12,
  _height: 6,
}

export function Up(props: DiagramNodeProps) {
  return <Shape {...UP} {...props} _style={extendStyle(UP, props)} />
}

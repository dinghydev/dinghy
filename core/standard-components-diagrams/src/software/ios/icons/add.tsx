import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADD = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.add;',
  _width: 30,
  _height: 30,
}

export function Add(props: DiagramNodeProps) {
  return <Shape {...ADD} {...props} _style={extendStyle(ADD, props)} />
}

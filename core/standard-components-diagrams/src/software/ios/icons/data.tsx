import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.data;',
  _width: 24,
  _height: 29.099999999999998,
}

export function Data(props: DiagramNodeProps) {
  return <Shape {...DATA} {...props} _style={extendStyle(DATA, props)} />
}

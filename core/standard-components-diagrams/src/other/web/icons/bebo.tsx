import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEBO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.bebo;fillColor=#695D5D;gradientColor=#100E0E',
  _width: 102.4,
  _height: 102.4,
}

export function Bebo(props: DiagramNodeProps) {
  return <Shape {...BEBO} {...props} _style={extendStyle(BEBO, props)} />
}

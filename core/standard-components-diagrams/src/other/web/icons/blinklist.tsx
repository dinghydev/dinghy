import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLINKLIST = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.blinklist;fillColor=#695D5D;gradientColor=#100E0E',
  _width: 102.4,
  _height: 102.4,
}

export function Blinklist(props: DiagramNodeProps) {
  return (
    <Shape {...BLINKLIST} {...props} _style={extendStyle(BLINKLIST, props)} />
  )
}

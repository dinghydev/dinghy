import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLINKLIST = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.blinklist;fillColor=#3A3333;strokeColor=none',
  _width: 81.2,
  _height: 72,
}

export function Blinklist(props: DiagramNodeProps) {
  return (
    <Shape {...BLINKLIST} {...props} _style={extendStyle(BLINKLIST, props)} />
  )
}
